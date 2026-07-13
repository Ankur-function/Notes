import { useEffect, useState } from "react";

const useOnlineOffline = () => {

    const [isOnline,setIsOnline] = useState(true);

  const fetchStatus = () => {

 window.addEventListener('online', () => {
  console.log("You are back online!");
  setIsOnline(true)
  // Add your logic to sync data or update the UI
});

window.addEventListener('offline', () => {
  console.log("You have lost your internet connection.");
  setIsOnline(false)
  // Add your logic to disable buttons or show an offline banner
});

}

  useEffect(()=>{
        fetchStatus()
  },[])

  return isOnline

}


export default useOnlineOffline;