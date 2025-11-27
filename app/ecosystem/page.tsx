"use client"
import PageLayout from '../components/layout/page-layout'
import Button from '../components/ui/button';
import Dropdown from '../components/ui/dropdown';
import Image from 'next/image';
import { BiChevronRight } from 'react-icons/bi';
import { useState, useMemo } from 'react';
import { ecosystemPartners, ecosystemRoles, ecosystemUtilities } from '@/constants/ecosystem';

const GlobalPage = () => {
  const [selectedRole, setSelectedRole] = useState("Show All")
  const [selectedUtility, setSelectedUtility] = useState("Show All")

  const items = [
    { title: "Cross-chain atomic transactions" },
    { title: "Privacy and independent control" },
    { title: "Regulated asset connectivity" }
  ];

  // Filter partners based on selected filters
  const filteredPartners = useMemo(() => {
    return ecosystemPartners.filter(partner => {
      const roleMatch = selectedRole === "Show All" || partner.role === selectedRole
      const utilityMatch = selectedUtility === "Show All" || partner.utility === selectedUtility
      return roleMatch && utilityMatch
    })
  }, [selectedRole, selectedUtility])

  return (
    <PageLayout
      title="Explore the Canton Network Ecosystem"
      description="Connect and build on the network where traditional finance meets blockchain velocity"
      textOnly
      items={items}
    >
      <div className="bg-black w-full py-20">
        <section className='mx-auto max-w-[1440px] px-6'>
          <div className="flex justify-between items-center w-full mb-10">
            <div className="flex gap-4">
              <Dropdown
                label="Roles"
                options={ecosystemRoles}
                selected={selectedRole}
                onSelect={setSelectedRole}
              />
              <Dropdown
                label="Network Utility"
                options={ecosystemUtilities}
                selected={selectedUtility}
                onSelect={setSelectedUtility}
              />
            </div>
            <div className="flex items-center gap-6">
              <span className="text-white font-medium">
                {filteredPartners.length} PARTNERS FOUND
              </span>
              <Button variant='primary'>Join the Ecosystem</Button>
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-6">
            {filteredPartners.map((partner) => (
              <div className="h-[450px] flex flex-col gap-10 w-full justify-between rounded-3xl p-10 bg-[#1b1b1b] text-white" key={partner.id}>
                <div className="grid grid-cols-2 gap-2">
                {partner.tags.map((tag, idx) => (
                  <span key={idx} className='border border-gray-400 text-center w-fit p-2 rounded-3xl text-[0.6rem] uppercase'>
                    {tag}
                  </span>
                ))}
                </div>
                <div>
                  <Image
                    src={partner.logo}
                    width={60}
                    height={60}
                    alt={`${partner.name} logo`}
                  />
                  <h1>{partner.name}</h1>
                  <p>{partner.description}</p>
                </div>
                <div className="flex justify-end gap-1 items-center text-[#f6ffa4]">
                  <a href={partner.href}>More</a>
                  <BiChevronRight />
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl">No partners found matching your filters.</p>
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  )
}

export default GlobalPage