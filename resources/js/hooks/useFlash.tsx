// resources/js/hooks/useFlashToast.jsx

import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { toast } from 'react-toastify';

export default function useFlashToast() {
  const { flash } = usePage().props as { flash?: { success?: string; error?: string } };

  useEffect(() => {
    if (flash?.success) {
      toast(flash.success);
    }
    if (flash?.error) {
      toast.error(flash.error);
    }
  }, [flash?.success, flash?.error]);
}
