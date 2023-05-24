import { Suspense } from "react";
import UserList from "./UserList";

// in here we use streaming and strim the (userList) component with (suspense)
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard page...</h1>
      {/* این دو سری دیتا در دوتا استریم جداگانه ای از بک اند گرفته میشن و منتظر هم نمیمونن */}
      {/* و ریکوست ها در دو جریان متفاوت فرستاده میشن */}
      {/* data (1) */}
      <Suspense fallback={<p>loading user list one...</p>}>
        <UserList />
      </Suspense>
      {/* data (2) */}
      <Suspense fallback={<p>loading user list two...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default Dashboard;
