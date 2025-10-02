"use client";
import { useState, useEffect } from "react";
import FunFactCounter from "@/components/FunFactCounter";
import TeamSection from "@/app/TeamMember/RegionalTeam";
import MemberList from "@/app/TeamMember/MembersList";
import RegionalTeamSection from "@/app/TeamMember/RegionalTeamSection";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import BNICTA from "@/components/BNIcta";
import Breadcrumb from "@/components/Breadcrumb";
import teamMembers from "@/data/membersList";

const page = () => {
  return (
    <NextLayout header={1}>
      <Breadcrumb pageName="Members" />
      <MemberList teamMembers={teamMembers} />

      {/* Funfact Section Start */}
      <section className="funfact-section section-padding pt-0 ">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              {/* <img src="assets/img/bale.png" alt="img" /> */}
              BNI Kanya Achievements
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Chapter's Impressive Statistics
            </h2>
            <p className="wow fadeInUp mt-3" data-wow-delay=".4s">
              Join the most successful business networking chapter in Nagercoil
            </p>
          </div>
          <FunFactCounter />
        </div>
      </section>

      {/* Team Section Start */}
      <BNICTA />
    </NextLayout>
  );
};
export default page;
