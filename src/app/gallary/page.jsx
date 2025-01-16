import Image from "next/image";
import React from "react";

const gallaryPage = () => {
  return (
    <div className="mt-20">
      gallary
      {/*  img optimize */}
      <div>
        {/* <img src="2.jpg" alt="" width={1270} height={1920} /> */}

        {[1, 2, 3]?.map((img) => (
          <Image
            key={img}
            src={`/${img}.jpg`}
            width={1920}
            height={1000}
            // placeholder="empty || blur"
            
          />
        ))}
        {/* <Image src={'/2.jpg'} width={1920} height={1000}/> */}
      </div>
    </div>
  );
};

export default gallaryPage;
