"use client";

import {
  useParams,
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";

const ClientComponent = () => {
  // میتونیم توی clientComponent ازش استفاده کنیم و توی layout استفاده ش کنیم تا ببینیم از اون لایه پایین تر کدوم مسیر انتخاب شده
  console.log(useSelectedLayoutSegment());
  // تمام کویری هایی که داریم رو توی اون صفحه بهمون میده
  console.log(useParams());
  // یک کویری بخصوص رو میتونه به ما بده
  console.log(useSearchParams().get("page"));
  // آدرس url ی که توش هستیم رو به ما میده
  console.log(usePathname());

  return (
    <div>
      <button onClick={() => console.log("clicked")}>click</button>
    </div>
  );
};

export default ClientComponent;
