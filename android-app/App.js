import { WebView } from 'react-native-webview';
export default function App() {
  return (
    <WebView
      source={{ uri: 'https://lifeline-wdc.com/fr/' }}
      style={{ flex: 1 }}
      originWhitelist={['https://lifeline-wdc.com']}
      onShouldStartLoadWithRequest={(request) => {
        const allowedPages = ['wallet.html', 'community.html', 'marketplace.html', 'settings.html', 'profile.html', 'dashboard.html'];
        const url = request.url;
        return allowedPages.some(page => url.includes(page)) || url === 'https://lifeline-wdc.com/fr/';
      }}
    />
  );
}
