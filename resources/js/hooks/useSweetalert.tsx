// resources/js/hooks/useFlashToast.jsx

import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

// declare global {
//   interface Window {
//     showNotification(type: string, title: string, message: string): void;
//   }
// }

type Message = {
  type?: string;
  title?: string;
  message?: string;
};

export default function useSweetalert() {
  const { mess } = usePage().props as { mess?: Message };

  useEffect(() => {
    if (mess?.type && mess?.message) {
      // Call the global function
      window.showNotification(
        mess.type,
        mess.title || '',   // fallback if no title
        mess.message
      );
    }
  }, [mess]);  // re-run when flash changes

}
