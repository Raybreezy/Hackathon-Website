import { Card } from "./ui/card";
import unitreeLogo from "figma:asset/3554e8c2b3c8d283e43a1668ba8cb2cb8b6bc6c0.png";
import awsLogo from "figma:asset/13b10e45dd9b0590c991561b8111fe8263804be2.png";
import intelLogo from "figma:asset/67e675520240db2a703eceea2ce484bbb3384f91.png";
import coohomLogo from "figma:asset/a770922130b2ae494a8ea5c4941e0611c5ca6dfb.png";
import bairLogo from "figma:asset/2cdeb0ec9322a6d2d63bf26c00416fd315c1fe71.png";
import akashLogo from "figma:asset/47e513c19728803b8676e1604eac963bf7c287ba.png";
import rokaeLogo from "figma:asset/550127b1ca4cfa711bd7ea456cd5d6e3a5bfdf51.png";
import tianjiLogo from "figma:asset/66a6ea143148728517af2899a53501b7609987e4.png";

export function SponsorsSection() {
  const sponsors = [
    { name: "Unitree", logo: "UT", image: unitreeLogo },
    { name: "AWS", logo: "AWS", image: awsLogo },
    { name: "Intel", logo: "IN", image: intelLogo },
    { name: "Coohom", logo: "CH", image: coohomLogo },
    { name: "BAIR", logo: "BR", image: bairLogo },
    { name: "Akash", logo: "AK", image: akashLogo },
    { name: "Rokae", logo: "RK", image: rokaeLogo },
    { name: "Tianji", logo: "TJ", image: tianjiLogo }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Sponsors and Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Thank you to our amazing sponsors and partners who make this event possible
          </p>
        </div>
        
        <div className="flex justify-center gap-8 flex-wrap">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-48 h-30">
                {sponsor.image ? (
                  sponsor.name === "Unitree" ? (
                    <a href="https://www.unitree.com/" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`}
                        className={`object-contain ${
                          sponsor.name === "Coohom" ? "w-72 h-48" : "w-36 h-24"
                        } hover:opacity-80 transition-opacity cursor-pointer`}
                      />
                    </a>
                  ) : sponsor.name === "AWS" ? (
                    <a href="https://aws.amazon.com/startups?lang=en-US" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`}
                        className={`object-contain ${
                          sponsor.name === "Coohom" ? "w-72 h-48" : "w-36 h-24"
                        } hover:opacity-80 transition-opacity cursor-pointer`}
                      />
                    </a>
                  ) : sponsor.name === "Intel" ? (
                    <a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`}
                        className={`object-contain ${
                          sponsor.name === "Coohom" ? "w-72 h-48" : "w-36 h-24"
                        } hover:opacity-80 transition-opacity cursor-pointer`}
                      />
                    </a>
                  ) : sponsor.name === "Coohom" ? (
                    <a href="https://www.spatial-verse.com/" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`}
                        className={`object-contain ${
                          sponsor.name === "Coohom" ? "w-72 h-48" : "w-36 h-24"
                        } hover:opacity-80 transition-opacity cursor-pointer`}
                      />
                    </a>
                  ) : sponsor.name === "BAIR" ? (
                    <a href="https://bair.berkeley.edu/" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`}
                        className={`object-contain ${
                          sponsor.name === "Coohom" ? "w-72 h-48" : "w-36 h-24"
                        } hover:opacity-80 transition-opacity cursor-pointer`}
                      />
                    </a>
                  ) : sponsor.name === "Akash" ? (
                    <a href="https://akash.network/" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`}
                        className={`object-contain ${
                          sponsor.name === "Coohom" ? "w-72 h-48" : "w-36 h-24"
                        } hover:opacity-80 transition-opacity cursor-pointer`}
                      />
                    </a>
                  ) : sponsor.name === "Rokae" ? (
                    <a href="https://www.rokae.com/" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`}
                        className="object-contain w-36 h-24 hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    </a>
                  ) : sponsor.name === "Tianji" ? (
                    <a href="https://www.tianji.com/" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`}
                        className="object-contain w-36 h-24 hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    </a>
                  ) : (
                    <img 
                      src={sponsor.image} 
                      alt={`${sponsor.name} logo`}
                      className={`object-contain ${
                        sponsor.name === "Coohom" ? "w-72 h-48" : "w-36 h-24"
                      }`}
                    />
                  )
                ) : (
                  <div className="w-20 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{sponsor.logo}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring future events?
          </p>
          <a href="mailto:hackathon@reborn-ai.xyz" className="text-primary hover:underline font-medium">
            Get in touch with our team
          </a>
        </div>
      </div>
    </section>
  );
}