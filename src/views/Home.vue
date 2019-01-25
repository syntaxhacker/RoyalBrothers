<template>
  <div class="home">
    <Referral headerText="Refer your Friends" number="99999999999"/>
    <Header :downarrowsvg="downarrowsvg"/>

    <HeroImageContainer :img="heroimg"/>
    <Ratings :ratingsObj="ratingList"/>
    <Specialities :specialities="specialities"/>
    <BikesSection :downarrowsvg="downarrowsvg" :bikes="bikes"/>
    <SponserSection :sponsers="sponsers"/>
    <Footer/>
  </div>
</template>

<script>
// imports
import Header from "@/components/Header.vue";
import Referral from "@/components/Referral.vue";
import HeroImageContainer from "@/components/HeroImageContainer.vue";
import Ratings from "@/components/Ratings.vue";
import Specialities from "@/components/Specialities.vue";
import BikesSection from "@/components/BikesSection.vue";
import SponserSection from "@/components/SponserSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Referral,
    HeroImageContainer,
    Ratings,
    Specialities,
    BikesSection,
    SponserSection,
    Footer
  },
  data() {
    return {
      downarrowsvg: "https://image.flaticon.com/icons/svg/25/25623.svg",
      heroimg: "https://i.imgur.com/tIqCc6U.jpg",
      ratingList: [
        {
          title: "CITIES",
          number: "45",
          symbol: "https://filedn.com/lN1J9K0wBX7bJGgdjkw5YCf/plus.svg",
          url: null
        },
        {
          title: "KILOMETERS",
          number: "5 M",
          symbol: null,
          url: null
        },
        {
          title: "On Facebook",
          number: "4.6",
          symbol:
            "https://filedn.com/lN1J9K0wBX7bJGgdjkw5YCf/rate-star-button.svg",
          url: "https://fb.com"
        },
        {
          title: "On Google",
          number: "4.5",
          symbol:
            "https://filedn.com/lN1J9K0wBX7bJGgdjkw5YCf/rate-star-button.svg",
          url: "https://fb.com"
        }
      ],
      specialities: [
        {
          content: "First RTO Authorized bike rental",
          description: "Pioneers in renting out bikes legally in Kerala"
        },
        {
          content: "Bikes in top notch conditions",
          description:
            "Each bike is cleaned and serviced weekly and also once before renting out."
        },
        {
          content: "Timely pick up and drop off",
          description:
            "If we delay even by 15 mins, ₹ 25 on scooter and ₹50 on bikes will be refunded."
        },
        {
          content: "Commercial Insurance is covered",
          description:
            "We have a valid commercial insurance for the rider, pillion and third party"
        },
        {
          content: "Most trusted & transparent process",
          description:
            "We are upfront about the entire process of renting a bike from us"
        },
        {
          content: "Serving in more than 40+ cities",
          description:
            "In case of any issue, we will coordinate with our other branches and resolve it"
        },
        {
          content: "Choose from a wide variety of bikes",
          description:
            "Pick a bike that suits your need for commuting within the city or for a long ride."
        }
      ],
      bikes: [
        {
          data: [
            {
              name: "Triumph Street Twin",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/triumph-street-twin-f05daa2c1afe29ce56c0743e633125b9640ed8d3c8ac0a6a2f4ffd32ca83a687.png"
            },
            {
              name: "Benelli TNT ",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/benelli-tnt-600-i-f49456eb5ce9ff63187a12f5ad9865227c03cde5d62c013001d8f8e80f0f1954.png"
            },
            {
              name: "Harley Davidson Iron",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/iron_883_home-b7393555ce9e97a3c101da50cc2566afc697111f06506bed3a67ecb13d09cfcb.png"
            },
            {
              name: "Classic 350",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/royal-enfield-redditch-497f032b3b14e89f634fbffe4f6d31252855978c3803dc3845c43d43530dd271.png"
            }
          ]
        },

        {
          data: [
            {
              name: "Triumph Street Twin",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/triumph-street-twin-f05daa2c1afe29ce56c0743e633125b9640ed8d3c8ac0a6a2f4ffd32ca83a687.png"
            },
            {
              name: "Benelli TNT ",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/benelli-tnt-600-i-f49456eb5ce9ff63187a12f5ad9865227c03cde5d62c013001d8f8e80f0f1954.png"
            },
            {
              name: "Harley Davidson Iron",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/iron_883_home-b7393555ce9e97a3c101da50cc2566afc697111f06506bed3a67ecb13d09cfcb.png"
            },
            {
              name: "Classic 350",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/royal-enfield-redditch-497f032b3b14e89f634fbffe4f6d31252855978c3803dc3845c43d43530dd271.png"
            }
          ]
        },
        {
          data: [
            {
              name: "Triumph Street Twin",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/triumph-street-twin-f05daa2c1afe29ce56c0743e633125b9640ed8d3c8ac0a6a2f4ffd32ca83a687.png"
            },
            {
              name: "Benelli TNT ",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/benelli-tnt-600-i-f49456eb5ce9ff63187a12f5ad9865227c03cde5d62c013001d8f8e80f0f1954.png"
            },
            {
              name: "Harley Davidson Iron",
              bikeimg:
                "https://d36g7qg6pk2cm7.cloudfront.net/assets/iron_883_home-b7393555ce9e97a3c101da50cc2566afc697111f06506bed3a67ecb13d09cfcb.png"
            }
          ]
        }
      ],
      sponsers: [
        {
          sponsername: "Your_Story",
          logo:
            "https://global-uploads.webflow.com/5ae98eec19474ec4b00cd02a/5ae98eec19474e137b0cd147_YS%2520logos-01-p-1600.png",
          articleurl: "https://example.com"
        },
        {
          sponsername: "TOI",
          logo: "https://i.imgur.com/cIc0m6L.png",
          articleurl: "https://example.com"
        },
        {
          sponsername: "Economic_Times",
          logo:
            "https://pngimage.net/wp-content/uploads/2018/05/economic-times-logo-png-4.png",
          articleurl: "https://example.com"
        },
        {
          sponsername: "The_Hindu",
          logo:
            "https://pngimage.net/wp-content/uploads/2018/06/the-hindu-logo-png-1.png",
          articleurl: "https://example.com"
        }
      ]
    };
  }
};
</script>
