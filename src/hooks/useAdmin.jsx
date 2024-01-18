import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const useAdmin = () => {
      const { data: session } = useSession(); 
      const [admin, setAdmin] = useState(false);

      useEffect(() => {
            if(session?.user?.role === 'admin'){
                  setAdmin(true)
            }else{
                  setAdmin(false)
            }
      }, [session])

      return admin;
}

export default useAdmin;