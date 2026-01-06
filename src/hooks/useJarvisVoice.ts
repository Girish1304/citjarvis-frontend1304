import { useCallback, useRef, useEffect, useState } from 'react';

const JARVIS_LINES = [
  "Systems initializing",
  "Power core activated",
  "Running diagnostics",
  "Arc reactor online",
  "All systems online, sir",
];

export const useJarvisVoice = () => {
  const [isPreloading, setIsPreloading] = useState(false);
  const audioCache = useRef<Map<number, string>>(new Map());
  const preloadPromise = useRef<Promise<void> | null>(null);

  const fetchAudio = useCallback(async (text: string): Promise<string | null> => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/jarvis-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text }),
        }
      );

      if (!response.ok) {
        console.error("TTS request failed:", response.status);
        return null;
      }

      const data = await response.json();
      return data.audioContent || null;
    } catch (error) {
      console.error("Error fetching audio:", error);
      return null;
    }
  }, []);

  // Preload all audio on first user interaction
  const preloadAll = useCallback(async () => {
    if (preloadPromise.current || audioCache.current.size > 0) return;
    
    setIsPreloading(true);
    preloadPromise.current = (async () => {
      const promises = JARVIS_LINES.map(async (line, index) => {
        const audio = await fetchAudio(line);
        if (audio) {
          audioCache.current.set(index + 1, audio);
        }
      });
      await Promise.all(promises);
      setIsPreloading(false);
    })();
    
    return preloadPromise.current;
  }, [fetchAudio]);

  const playAudio = useCallback(async (base64Audio: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        const audioUrl = `data:audio/mpeg;base64,${base64Audio}`;
        const audio = new Audio(audioUrl);
        audio.onended = () => resolve();
        audio.onerror = () => reject(new Error("Audio playback failed"));
        audio.play().catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }, []);

  const speakLine = useCallback(async (clickNumber: number): Promise<void> => {
    const cached = audioCache.current.get(clickNumber);
    if (cached) {
      await playAudio(cached);
    }
  }, [playAudio]);

  const getLineForClick = useCallback((clickNumber: number): string => {
    if (clickNumber >= 1 && clickNumber <= 5) {
      return JARVIS_LINES[clickNumber - 1];
    }
    return "";
  }, []);

  return { speakLine, getLineForClick, preloadAll, isPreloading };
};
