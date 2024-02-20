import { useEffect, useRef, useState } from 'react';

export const PWAInstallationButton = () => {
  const deferredPromptRef = useRef<BeforeInstallPromptEvent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const beforeInstallPromptHandler = (e: Event) => {
      e.preventDefault(); // Prevent the default behavior
      setReady(true);
      deferredPromptRef.current = e as BeforeInstallPromptEvent;
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        beforeInstallPromptHandler
      );
    };
  }, []);

  const handleClickInstall = async () => {
    const deferredPrompt = deferredPromptRef.current;

    if (deferredPrompt) {
      // インストールプロンプトを表示する
      await deferredPrompt.prompt();
    }
  };

  return (
    <>
      <p>test</p>
      {/* <button disabled={!ready} onClick={handleClickInstall}> */}
      <button onClick={handleClickInstall}>Install</button>
    </>
  );
};

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}
