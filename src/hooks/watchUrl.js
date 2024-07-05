import { useState, useEffect } from 'react';
import { Linking } from 'react-native';


const watchUrl = () => {
    const [lastAppUrl, setLastAppUrl] = useState(null);
  
    useEffect(() => {
      const handleDeepLink = (event) => {
        const url = event.url;
        if (url) {
          setLastAppUrl(url);
        //   console.log('last app', url);
        }
      };
  
      // Listen for deep links
      const subscription = Linking.addEventListener('url', handleDeepLink);
  
      // Check if the app was opened with a deep link
      Linking.getInitialURL().then((url) => {
        if (url) {
          handleDeepLink({ url });
        }
      });
  
      return () => {
        subscription.remove();
        // Linking.removeEventListener('url', handleDeepLink);
      };
    }, []);
  
    return lastAppUrl;
  };
  
export default watchUrl;