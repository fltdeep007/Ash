"use client";
import React, { useState, useEffect } from "react";
import "../../styles/about/meet-leaders.css";
import Image from "next/image";
export default function MeetLeaders() {
  const [ismousehoveratteq, setismousehoveratteq] = useState(false);
  const [ismousehoverajaz, setismousehoverajaz] = useState(false);

  const [ismousehoverashiyan, setismousehoverashiyan] = useState(false);
  const [ismousehoverrizwan, setismousehoverizwan] = useState(false);

  const [toggle, setToggle] = useState<Number>(0);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const toggleAccord = (index: Number) => {
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let left1 = document.getElementById("left1");
    let right1 = document.getElementById("right1");
    if (index === 1 && right) right.classList.add("opacity-0");
    if (index === 2 && left) left.classList.add("opacity-0");
    if (index === 3 && right1) right1.classList.add("opacity-0");
    if (index === 4 && left1) left1.classList.add("opacity-0");

    if (index === 1 && right && index === toggle)
      right.classList.remove("opacity-0");
    if (index === 2 && left && index === toggle)
      left.classList.remove("opacity-0");
    if (index === 3 && right1 && index === toggle)
      right1.classList.remove("opacity-0");
    if (index === 4 && left1 && index === toggle)
      left1.classList.remove("opacity-0");
    if (index === toggle) setToggle(0);
    else setToggle(index);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      // Close all toggles when scrolling
      if (toggle !== 0) {
        let left = document.getElementById("left");
        let right = document.getElementById("right");
        let left1 = document.getElementById("left1");
        let right1 = document.getElementById("right1");

        if (left) left.classList.remove("opacity-0");
        if (right) right.classList.remove("opacity-0");
        if (left1) left1.classList.remove("opacity-0");
        if (right1) right1.classList.remove("opacity-0");

        // Reset toggle state
        setToggle(0);
      }
    };

    // Add event listeners for resize and scroll events
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Remove event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggle]);
  return (
    <div
      className="w-full h-[1080px] sm:h-[1440px] "
      style={{ backgroundColor: "#807860" }}
    >
      <div className="theteam relative text-center left-[10px] sm:left-[80px] sm:top-[83px] top-[10px] w-[246px] sm:w-[350px] h-[50px]">
        The Team{" "}
      </div>
      <div className="meetlead relative  left-[10px] sm:left-[80px]  top-[50px] sm:top-[176px]  w-[246px] sm:w-[350px] h-[50px]">
        Meet Our Leaders
      </div>
      <div className=" relative top-[-56px] sm:top-[208px] flex flex-row items-center justify-around w-full h-[545px] ">
        {windowWidth !== null && windowWidth > 840 ? (
          <div
            className="sm:ml-[-10%] relative w-[175px] h-[227px] sm:w-[231px] sm:h-[331px] lg:w-[368px] lg:h-[453px]"
            style={{ backgroundColor: "#6B634B" }}
            onMouseEnter={() => {
              setismousehoveratteq(true);
            }}
            onMouseLeave={() => {
              setismousehoveratteq(false);
            }}
          >
            {windowWidth !== null && windowWidth > 840 && ismousehoveratteq ? (
              <>
                <div className="absolute ml-[15px] mt-[16%] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[300px] lg:h-[300px] z-30">
                  <Image
                    src="/"
                    alt="ATTEQUE KHOT"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className="mt-[-8%] ml-[40%] absolute w-[200%] h-[100%] z-20 p-8 pl-48 pt-24"
                  style={{
                    backgroundColor: "#98937D",
                    boxShadow: "10px 5px 6px #00000029",
                  }}
                >
				  <p className="leadersname">ATTEQUE KHOT</p>
				  <p className="roles mb-5">Director (founder)</p>
                  <p className="text-black">Co-Founder, Philanthropist & Influential Leader, Ashiyana
                  Group Ateeque Khot, with more than 32 years of experience, has
                  played a pivotal role in the robust growth and success of the
                  Ashiyana Group through his leadership and philanthropic
                  efforts. His vision and strategic thinking have been
                  instrumental in expanding the group&apos;s footprint and
                  fostering community development.{" "}</p>
                </div>
              </>
            ) : (
              <div className="relative m-[15px] flex w-[144px] h-[65%] sm:w-[201px] sm:h-[201px] lg:w-[337px] lg:h-[337px]">
                <Image
                  src="/"
                  alt="ATTEQUE KHOT"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {windowWidth !== null &&
            windowWidth > 840 &&
            ismousehoveratteq ? null : (
              <>
                <p className="leadersname">ATTEQUE KHOT</p>
                <p className="roles">Director (founder)</p>
              </>
            )}
          </div>
        ) : (
          <div
            id="left"
            className="sm:ml-[-10%] relative w-[175px] h-[227px] sm:w-[231px] sm:h-[331px] lg:w-[368px] lg:h-[453px] "
            style={{ backgroundColor: "#6B634B" }}
            onClick={(event) => {
              toggleAccord(1);
            }}
          >
            {toggle === 1 ? (
              <>
                <div className="absolute ml-[15px] mt-[-20%] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[300px] lg:h-[300px] z-30">
                  <Image
                    src="/"
                    alt="ATTEQUE KHOT"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className="mt-[30%]  absolute w-[200%] h-auto z-20 text-[#D1CFBF]"
                  style={{
                    backgroundColor: "#98937D",
                    boxShadow: "10px 5px 6px #00000029",
                  }}
                >
                  <p className="ml-[50%] text-right">ATEEQUE KHOT</p>
                  <p className="ml-[50%] text-right">Director <br/> (founder)</p>
                  <br />

                  <p className="ml-[10px] sm:mt-[10px] text-black">
                    Co-Founder, Philanthropist & Influential Leader, Ashiyana
                    Group Ateeque Khot, with more than 32 years of experience,
                    has played a pivotal role in the robust growth and success
                    of the Ashiyana Group through his leadership and
                    philanthropic efforts. His vision and strategic thinking
                    have been instrumental in expanding the group&apos;s
                    footprint and fostering community development.
                  </p>
                </div>
              </>
            ) : (
              <div className=" relative m-[15px] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[337px] lg:h-[337px]">
                <Image
                  src="/"
                  alt="ATTEQUE KHOT"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {toggle === 1 ? null : (
              <>
                <p className="leadersname">ATTEQUE KHOT</p>
                <p className="roles">Director (founder)</p>
              </>
            )}
          </div>
        )}
        {windowWidth !== null && windowWidth > 840 ? (
          <div
            className="sm:mr-[-10%]  relative w-[175px] h-[227px] sm:w-[231px] sm:h-[331px] lg:w-[368px] lg:h-[453px] "
            style={{ backgroundColor: "#6B634B" }}
            onMouseEnter={() => {
              setismousehoverajaz(true);
            }}
            onMouseLeave={() => {
              setismousehoverajaz(false);
            }}
          >
            {ismousehoverajaz ? (
              <>
                <div className="flex flex-row-reverse">
                  <div className=" absolute mr-[15px] mt-[16%] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[300px] lg:h-[300px] z-30">
                    <Image
                      src="/"
                      alt="AJAZ KHOT"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div
                    className="mt-[-8%] mr-[40%] absolute w-[200%] h-[100%] z-20 p-8 pr-48 pt-24 text-right"
                    style={{
                      backgroundColor: "#98937D",
                      boxShadow: "10px 5px 6px #00000029",
                    }}
                  >
					<p className="leadersname">AJAZ KHOT</p>
					<p className="roles mb-5">Director (founder)</p>
                    <p className="text-black">
                      Co-Founder & Visionary Leader, Ashiyana Group With over 34
                      years of experience, Ajaz Khot is the driving force behind
                      the quality construction that is the core value of the
                      Ashiyana Group. His expertise and dedication ensure that
                      every project meets the highest standards of excellence,
                      making Ashiyana a trusted name in the industry.
                    </p>
                  </div>{" "}
                </div>
              </>
            ) : (
              <div className="relative  m-[15px] w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[337px] lg:h-[337px]">
                <Image
                  src="/"
                  alt="Ajaz Khot"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {ismousehoverajaz ? null : (
              <>
                <p className="leadersname">AJAZ KHOT</p>
                <p className="roles">Director (founder)</p>
              </>
            )}
          </div>
        ) : (
          <div
            id="right"
            className="sm:mr-[-10%]  relative w-[175px] h-[227px] sm:w-[231px] sm:h-[331px] lg:w-[368px] lg:h-[453px]"
            style={{ backgroundColor: "#6B634B" }}
            onClick={(event) => {
              toggleAccord(2);
            }}
          >
            {toggle === 2 ? (
              <>
                <div className="flex flex-row-reverse">
                  <div className=" absolute mr-[15px] mt-[-20%] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[300px] lg:h-[300px] z-30">
                    <Image
                      src="/"
                      alt="AJAZ  KHOT"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div
                    className="mt-[30%]  absolute w-[200%] h-auto z-20 text-[#D1CFBF]"
                    style={{
                      backgroundColor: "#98937D",
                      boxShadow: "10px 5px 6px #00000029",
                    }}
                  >
                    <p className=" text-left">AJAZ KHOT</p>
                    <p className=" text-left">Director <br /> (founder)</p>
                    <br />
                    <p className="ml-[10px] sm:mt-[10px] text-black">
                      Co-Founder & Visionary Leader, Ashiyana Group With over 34
                      years of experience, Ajaz Khot is the driving force behind
                      the quality construction that is the core value of the
                      Ashiyana Group. His expertise and dedication ensure that
                      every project meets the highest standards of excellence,
                      making Ashiyana a trusted name in the industry.{" "}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative m-[15px] w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[337px] lg:h-[337px]">
                <Image
                  src="/"
                  alt="AJAZ  KHOT"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            {toggle === 2 ? null : (
              <>
                <p className="leadersname">AJAZ KHOT</p>
                <p className="roles">Director (founder)</p>
              </>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-row justify-center relative  top-[-119px] sm:top-[191px]">
        <div
          className="flex flex-row items-center  justify-center sm:justify-around  w-full sm:w-2/3 h-[384px] sm:h-[553px]"
          style={{ backgroundColor: "#6B634B" }}
        >
          {windowWidth !== null && windowWidth > 840 ? (
            <div
              className="relative h-[200px] w-[132px] sm:h-[267px] sm:w-[187px] lg:w-[305px] lg:h-[402px] "
              style={{ backgroundColor: "#807860" }}
              onMouseEnter={() => {
                setismousehoverashiyan(true);
              }}
              onMouseLeave={() => {
                setismousehoverashiyan(false);
              }}
            >
              {ismousehoverashiyan ? (
                <>
                  <div className="absolute ml-[15px] mt-[16%] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[300px] lg:h-[300px] z-30">
                    <Image
                      src="/Team/Ash.jpeg"
                      alt="Ashiyan Khot"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div
                    className="mt-[-8%] ml-[40%] absolute w-[230%] h-[110%] z-20 p-8 pl-52 pt-24"
                    style={{
                      backgroundColor: "#98937D",
                      boxShadow: "10px 5px 6px #00000029",
                    }}
                  ><p className="leadersname">Ashiyan KHOT</p>
									<p className="roles mb-5">Full-time Director </p>
                    <p>Leader of Business Development and Strategy, Ashiyana Group
                    For over 9 years, Ashiyan Khot has been leading the team
                    with decisiveness and ethical principles. He is responsible
                    for site management, business development, and strategic
                    planning for the group. His innovative approach and
                    commitment to sustainable practices drive the group&apos;s
                    progress and market presence.{" "}</p>
                  </div>
                </>
              ) : (
				<div>
                <div className=" m-[15px] h-[100px] w-[100px] sm:h-[155px] sm:w-[155px] lg:w-[273px] lg:h-[273px] relative">
                  <Image
                    src="/Team/Ash.jpeg"
                    alt="Ashiyan Khot"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
				                    <p className="leadersname">Ashiyan KHOT</p>
									<p className="roles">Full-time Director </p>
									</div>
              )}
              {ismousehoverashiyan ? null : (
                <>

                </>
              )}
            </div>
          ) : (
            <div
              id="left1"
              className="relative h-[200px] w-[132px] sm:h-[267px] sm:w-[187px] lg:w-[305px] lg:h-[402px] "
              style={{ backgroundColor: "#807860" }}
              onClick={(event) => {
                toggleAccord(3);
              }}
            >
              {toggle === 3 ? (
                <>
                  <div className="absolute ml-[15px] mt-[16%] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[300px] lg:h-[300px] z-30">
                    <Image
                      src="/Team/Ash.jpeg"
                      alt="Ashiyan Khot"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div
                      className="mt-[-8%] mr-[0%] absolute w-[200%]  z-20 text-[#000] text-justify text-sm p-4"
                      style={{
                        backgroundColor: "#98937D",
                        boxShadow: "10px 5px 6px #00000029",
                      }}
                    >
						          <div className="mt-44 text-right">
                      <p className="leadersname ">Ashiyan  KHOT</p>
                      <p className="roles mb-5 ">Full-time Director</p>
                      <p>Leader of Business Development and Strategy, Ashiyana Group
                    For over 9 years, Ashiyan Khot has been leading the team
                    with decisiveness and ethical principles. He is responsible
                    for site management, business development, and strategic
                    planning for the group. His innovative approach and
                    commitment to sustainable practices drive the group&apos;s
                    progress and market presence.{" "}</p></div>
                    </div>
                </>
              ) : (
                <div className="relative m-[15px]  h-[100px] w-[100px] sm:h-[155px] sm:w-[155px] lg:w-[273px] lg:h-[273px]">
                  <Image
                    src="/Team/Ash.jpeg"
                    alt="Ashiyan Khot"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              {toggle === 3 ? null : (
                <>
                  <p className="leadersname">Ashiyan KHOT</p>
                  <p className="roles">Full-time Director </p>
                </>
              )}
            </div>
          )}

          {windowWidth !== null && windowWidth > 840 ? (
            <div
              className="relative ml-[10px] h-[200px] w-[132px] sm:h-[267px] sm:w-[187px] lg:w-[305px] lg:h-[402px]"
              style={{ backgroundColor: "#807860" }}
              onMouseEnter={() => {
                setismousehoverizwan(true);
              }}
              onMouseLeave={() => {
                setismousehoverizwan(false);
              }}
            >
              {ismousehoverrizwan ? (
                <>
                  <div className="flex flex-row-reverse">
                    <div className=" absolute mr-[15px] mt-[16%] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[300px] lg:h-[300px] z-30">
                      <Image
                        src="/Team/Riz.jpeg"
                        alt="Rizwan Khot"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div
                      className="mt-[-8%] mr-[40%] absolute w-[230%] h-[110%] z-20 p-8 pr-52 pt-24 text-right"
                      style={{
                        backgroundColor: "#98937D",
                        boxShadow: "10px 5px 6px #00000029",
                      }}
                    ><p className="leadersname">Rizwan KHOT</p>
                  <p className="roles mb-5"> Director Sales </p>
                      <p>Head of Sales and Customer Relations, Ashiyana Group With
                      a vast experience of over 12 years in customer
                      satisfaction, Rizwan Khot leads the sales and after-sales
                      teams, focusing on building the brand through optimal
                      client relationship management. His efforts in enhancing
                      customer experience and loyalty have significantly
                      contributed to Ashiyana&apos;s reputation and client base.</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className=" m-[15px]  h-[100px] w-[100px] sm:h-[155px] sm:w-[155px] lg:w-[273px] lg:h-[273px] relative">
                  <Image
                    src="/Team/Riz.jpeg"
                    alt="Rizwan Khot"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              {ismousehoverrizwan ? null : (
                <>
                  <p className="leadersname">Rizwan KHOT</p>
                  <p className="roles"> Director Sales </p>
                </>
              )}
            </div>
          ) : (
            <div
              id="right1"
              className="relative ml-[10px] h-[200px] w-[132px] sm:h-[267px] sm:w-[187px] lg:w-[305px] lg:h-[500px]"
              style={{ backgroundColor: "#807860" }}
              onClick={() => {
                toggleAccord(4);
              }}
            >
              {toggle === 4 ? (
                <>
                  <div className="flex flex-row-reverse">
                    <div className="absolute mr-[15px] mt-[16%] flex w-[144px] h-[144px] sm:w-[201px] sm:h-[201px] lg:w-[300px] lg:h-[300px] z-30">
                      <Image
                        src="/Team/Riz.jpeg"
                        alt="Rizwan Khot"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div
                      className="mt-[-8%] mr-[0%] absolute w-[200%]  z-20 text-[#000] text-justify text-sm p-4"
                      style={{
                        backgroundColor: "#98937D",
                        boxShadow: "10px 5px 6px #00000029",
                      }}
                    >
						          <div className="mt-44">
                      <p className="leadersname">Rizwan KHOT</p>
                      <p className="roles mb-5"> Director Sales </p>
                      Head of Sales and Customer Relations, Ashiyana Group With
                      a vast experience of over 12 years in customer
                      satisfaction, Rizwan Khot leads the sales and after-sales
                      teams, focusing on building the brand through optimal
                      client relationship management. His efforts in enhancing
                      customer experience and loyalty have significantly
                      contributed to Ashiyana&apos;s reputation and client base.</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className=" m-[15px]  h-[100px] w-[100px] sm:h-[155px] sm:w-[155px] lg:w-[273px] lg:h-[273px] relative">
                  <Image
                    src="/Team/Riz.jpeg"
                    alt="Rizwan Khot"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              {toggle === 4 ? null : (
                <>
                  <p className="leadersname">Rizwan KHOT</p>
                  <p className="roles"> Director Sales </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
