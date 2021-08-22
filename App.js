
import './App.css';
import Hariram from './Hariram';
import Computer from './Computer';

function App() { 

  const servicaData=[ 
    {
      title:"India",
      subtitle:"Tamil Nadu",
      desc:"Tamil Nadu (Tamil: தமிழ்நாடு) is one of the states in India. The capital of this state is Chennai. Tamil is the language spoken in Tamil Nadu.",
      image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb5%2FIndia_Tamil_Nadu_COVID-19_density_map.svg%2F330px-India_Tamil_Nadu_COVID-19_density_map.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCOVID-19_pandemic_in_Tamil_Nadu&tbnid=rFfKqjBjnavKNM&vet=12ahUKEwj4vPLi7cHyAhWyNHIKHV3GCbcQMyg1egQIARA9..i&docid=RjntvleoTvaz2M&w=330&h=410&q=tamil%20nadu%20about%20two%20lines&ved=2ahUKEwj4vPLi7cHyAhWyNHIKHV3GCbcQMyg1egQIARA9",
    },
    {
      title:"India",
      subtitle:"Maharashtra",
      desc:"Maharashtra has more business than any other one state of India. There are some well-known cave monuments like Ajanta and Ellora. ... Some of the crops grown in Maharashtra are Bajra, Jowar, Rice, Wheat, etc.",
      image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.studytoday.net%2Fwp-content%2Fuploads%2F2017%2F11%2FMaharashtra-map.jpg&imgrefurl=https%3A%2F%2Fwww.studytoday.net%2Fmaharashtra-essay%2F&tbnid=nlveGqPvUHiy1M&vet=12ahUKEwjr4P3F7sHyAhWWdH0KHdkLBYEQMygFegUIARC6AQ..i&docid=6UNn3UlwXkmYpM&w=400&h=294&q=maharashtra%20about%20two%20lines&hl=en&ved=2ahUKEwjr4P3F7sHyAhWWdH0KHdkLBYEQMygFegUIARC6AQ",
    }, 
    {
      title:"India", 
      subtitle:"Delhi",
      desc:"Delhi is a metro city and an important business hub. Many Sufi dargahs (shines) in Delhi most famous one is Hazrat Nizammudin Auliya dargah. All important ministry and government offices are in New Delhi are of Delhi.",
      image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mapsofindia.com%2Fdelhi%2Fdistricts%2Fdelhi-district-map.jpg&imgrefurl=https%3A%2F%2Fwww.mapsofindia.com%2Fdelhi%2Fdistricts%2F&tbnid=z0oV8H6k6EJNXM&vet=12ahUKEwju_56R78HyAhWTQH0KHbDYBqkQMygBegUIARDVAQ..i&docid=dF9kGXB1yIKpsM&w=800&h=730&q=delhi%20map&hl=en&ved=2ahUKEwju_56R78HyAhWTQH0KHbDYBqkQMygBegUIARDVAQ",
    },
    {
      title:"India",
      subtitle:"west Bengal",
      desc:"Kolkata is the capital city of West Bengal. In 2001, 80,221,171 people lived in West Bengal. With an area of 34,267 mi² (88,752 km²), it is bigger than Serbia but smaller than Jordan.",
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWest_Bengal&psig=AOvVaw3xrQlFvF2OzrzVWIY9E37P&ust=1629626966347000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj_nt3vwfICFQAAAAAdAAAAABAD",
    },
    {
      title:"India",
      subtitle:"Madhya Pradhesh",
      desc:"Madhya Pradesh is the second largest Indian state by area and the fifth largest state by population with over 72 million residents.",
      image:"https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.quickgs.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fmadhya-pradesh.gif&imgrefurl=http%3A%2F%2Fquickgs.com%2Finteresting-facts-about-madhya-pradesh%2F&tbnid=Uw1zfrdgZXjzaM&vet=12ahUKEwiuzs3h8MHyAhVAk0sFHcE4AacQMygQegUIARDMAQ..i&docid=VMxr-yJcFo8K5M&w=456&h=300&q=madhya%20pradesh%20about%20two%20lines&hl=en&ved=2ahUKEwiuzs3h8MHyAhVAk0sFHcE4AacQMygQegUIARDMAQ",
    },    
    ];
    return(
    <>
    <Hariram/>
    <div className="container">
        
    
            {
              servicaData.map((data,label)=>(
                <Computer key={label} 
                          title={data.title} 
                          subtitle={data.subtitle} 
                          img={data.img} 
                          desc={data.desc} 
                        />
              ))}
      </div>
      </>
  );
}

export default App;


