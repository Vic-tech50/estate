import '../css/app.css';
import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
// import {route} from 'ziggy-js'
import { Ziggy } from './ziggy';  // the generated config file
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

declare global {
  interface Window {
    showNotification: (type: any, title: any, message: any) => void;
  }
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
// window.route = (name, params, absolute) => route(name, params, absolute, Ziggy)

window.showNotification = (type: any , title: any, message: any) => {
  Swal.fire({
    icon: type,
    title: title,
    text: message,
    toast: false,
    theme: 'light',
    topLayer: true,
    // iconColor: 'red',
    // position: 'top-end',
    showConfirmButton: true,
    timer: 3000,
    timerProgressBar: true,
    width: '25em'
  });
};
createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
         globalThis.Ziggy = Ziggy;

         

        root.render(
         <React.StrictMode>
        <App {...props} />
       <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
// transition={Zoom}
/>


      </React.StrictMode>
    );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
