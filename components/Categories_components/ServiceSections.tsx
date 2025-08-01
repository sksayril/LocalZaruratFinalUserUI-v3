'use client';

import { ChevronRight } from 'lucide-react';

const sections = [
  {
    title: 'Wedding Requisites',
    services: [
      {
        name: 'Banquet Halls',
        image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Bridal Requisite',
        image: 'https://images.pexels.com/photos/1779065/pexels-photo-1779065.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Caterers',
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ]
  },
  {
    title: 'Beauty & Spa',
    services: [
      {
        name: 'Beauty Parlours',
        image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Spa & Massages',
        image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Salons',
        image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ]
  },
  {
    title: 'Repairs & Services',
    services: [
      {
        name: 'AC Service',
        image: 'https://images.pexels.com/photos/8005055/pexels-photo-8005055.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Car Service',
        image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Bike Service',
        image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ]
  },
  {
    title: 'Daily Needs',
    services: [
      {
        name: 'Movies',
        image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Grocery',
        image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        name: 'Electricians',
        image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ]
  }
];

export default function ServiceSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-300 border-[0.5px] p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 text-left">{section.title}</h3>
            <div className="grid grid-cols-3 gap-8 gap-y-4">
              {section.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="flex flex-col items-center">
                  <div className="w-48 h-32 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center mx-2">
                    <img 
                      src={service.name === 'Bridal Requisite' ? 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=300' : service.image}
                      alt={service.name}
                      className="w-full h-full object-cover p-1 rounded-xl"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-800 text-center leading-tight">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}