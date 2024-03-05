import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'


const updateSW = registerSW({
    onNeedRefresh() {
        // この関数は、更新が利用可能になったときに呼び出されます
        if (confirm('新しいバージョンが利用可能です。今すぐ更新しますか？')) {
            updateSW()
        }
    },
    onOfflineReady() {
        // この関数は、アプリがオフラインで利用可能になったときに呼び出されます
        alert("オフラインでも使用可能になりました")
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
