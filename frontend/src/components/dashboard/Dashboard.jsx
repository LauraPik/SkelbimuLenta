import { useEffect, useState } from "react";
import * as advertistment from "../../services/advertisments";
import { useSelector } from "react-redux";
import DashboardElem from "../dashboardElm/DashboardElm";

export default function Dashboard() {
    const { currentUser } = useSelector((state) => state.user);
    const token = currentUser.token;
    const [data, setData] = useState([]);
  
    console.log(data);
    const getAdds = async () => {
      try {
        const res = await advertistment.getAllAdds(token);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
        getAdds();
    }, []);
  
    return (
    <>
    <div className="container d-flex justify-content-around ">
        <h1 className="">Skelbimų lenta</h1></div>
    
      <div className="container d-flex justify-content-around  ">
        
        {data.map((add) => {
          return <DashboardElem key={add.id_}  add ={add} />;
        })}
      </div>
      </>
    );
  }