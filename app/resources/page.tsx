
import Image from "next/image"

const webPages = [
  {'title': "What is Humanism?",
'source': "Humanists International",
'url': "https://humanists.international/what-is-humanism/"},
{'title': "Good Without God: An Illustrated Guide To Humanism",
'source': "Humanists International",
'url': "https://humanists.international/wp-content/uploads/2021/04/Good-without-a-God.pdf"},

{'title': "What is the Humanistic Theory in Education?",
'source': "Chris Drew (PhD) @ HelpfulProfessor.com",
'url': "https://helpfulprofessor.com/humanist-theory-in-education/"},
{'title': "Humanism: Africa",
'source': "Encyclopedia.com",
'url': "https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/humanism-africa"},
{'title': "Humanism Needs An Upgrade: Is Sentientism the Philosophy That Could Save the World?",
'source': "Secular Humanism : Free Inquiry",
'url': "https://www.secularhumanism.org/2019/04/humanism-needs-an-upgrade-is-sentientism-the-philosophy-that-could-save-the-world/"},


]
const academicPapers = [
  {'title': 'A Redescriptive History of Humanism and Hermeneutics in African Philosophy',
'author': 'Oladapo Jimoh Balogun : Department of Philosophy, Lagos State University, Ojo, Nigeria',
'url': 'https://www.scirp.org/journal/paperinformation.aspx?paperid=28024'},
{'title': 'African Humanism in Achebe in Relation to the West',
'author': 'Edeh Department of Philosophy, University of Abuja, Abuja, Nigeria',
'url': 'https://www.scirp.org/journal/paperinformation.aspx?paperid=28024'},
{'title': 'Scientific Humanisms and the Anthropocene, Or the Dream of Steering the Evolution of the Human and Natural World',
'author': 'Marianne Sommer (2020)',
'url': 'https://praticasdahistoria.pt/article/download/24293/17972/93860'},



]
const books = [
  {'title': 'Vehicle For Progress: Rethinking African Cultural Dynamics',
'author': 'Takudzwa Mazwienduna',
'url': 'https://www.amazon.co.uk/Vehicle-Progress-Rethinking-Cultural-Dynamics-ebook/dp/B09MZ924HP/ref=sr_1_1?crid=9OVTEZDCYUDQ&keywords=Vehicles+For+Progress&qid=1691836106&s=books&sprefix=vehicles+for+progre%2Cstripbooks%2C493&sr=1-1',
'image': '/StaticResources/vehicleForProgress.jpg' },
{'title': 'Little Book on Humanism',
'author': 'Andrew Copson & Alice Roberts',
'url': 'https://www.amazon.co.uk/Little-Book-Humanism-Universal-lessons/dp/0349425469',
'image': '/StaticResources/LitteBookOnHumanism.jpg' },
{'title': 'The Oxford Handbook of Humanism',
'author': 'ed. by Anthony B Pinn',
'url': 'https://academic.oup.com/book/36311',
'image': '/StaticResources/handbook.jpg' },




]
const essays = [
  {'title': 'Humanist Manifesto I (1933)',
'url': 'https://americanhumanist.org/what-is-humanism/manifesto1/'},
{'title': 'Humanist Manifesto II (1973)',
'url': 'https://americanhumanist.org/what-is-humanism/manifesto2/'},
{'title': 'Humanist Manifesto III: Humanism and its Aspirations (2003)',
'url': 'https://americanhumanist.org/what-is-humanism/manifesto3/'},
{'title': 'The Promise of Humanism',
'url': 'https://americanhumanist.org/what-is-humanism/the-promise-of-humanism/'},
]



const Resources = () => {
  return (
    <>
       <p className='text-pink-600 text-center text-xs px-2 md:text-md lg:font-bold mt-24'>This page contains links to books and resources, for some light reading for those who are curious about the conversations which humanists have about humanity</p>
      <div className="my-8 p-4 mx-4 lg:px-36">
      <h1  className='text-4xl font-bold text-white bg-gradient-to-r from-pink-600 to-yellow-400 py-10 px-2 lg:text-center rounded-lg'>Explore Humanism from Reliable Sources</h1>
   
      </div>
      <div className="container mt-8 mx-4 lg:mx-96">

<div>
  <div className="mb-8 lg:w-96">
  <h4 className='underline font-bold mb-2 text-2xl text-underline decoration-pink-400 decoration-4'>Web Pages</h4>


<ol>

{webPages.map((webPage) =>{
  return(
    <li key={webPage.title}  className="m-4">
      <a href={webPage.url} className="text-blue-900  text-lg md:text-xl">
        {webPage.title}
      </a>
      <p>Source: {webPage.source}</p>


      </li>
  )
})}
</ol>

  </div>




<div className="mb-8 lg:w-96">
    <h4 className='underline mb-2 text-2xl font-bold text-underline decoration-pink-400 decoration-4'>Academic Papers</h4>
<ol>
{academicPapers.map((academicPaper)=>{
  return(
    <li className="m-4" key={academicPaper.title}>
      <a href={academicPaper.url} className="text-blue-900 text-lg md:text-xl ">{academicPaper.title}</a>
      <p>Author: {academicPaper.author}</p>
    </li>
  )
})}
</ol>
 <p className='text-pink-600 text-xs'>Click below to help us locate this paper</p>
  <a href="https://worldcat.org/title/869755918" className="text-blue-900 text-lg md:text-xl">Hunhuism or ubuntuism : a Zimbabwe indigenous political philosophy </a>
  <p>by Thompson Samkange (1980)</p>
</div>
<div className='mb-8'>
<h4 className='underline font-bold mb-2 text-2xl font-bold text-underline decoration-pink-400 decoration-4'>Essays</h4>
<ol>
{essays.map((essay)=>{
return(
  <li className="m-4" key={essay.title}>
    <a href={essay.url}  className="block text-blue-900 text-lg md:text-xl">{essay.title} </a>
  </li>
)
})}

</ol>
</div>
<div className="mb-16">
<h4 className='underline text-2xl mb-2 font-bold text-underline decoration-pink-400 decoration-4'>Books</h4>
<ol >
{books.map((book) =>{
  return(
    <li key={book.title} >
        <div className="flex m-4">
      <div className="w-75 h-75 mr-8">
        <Image src={book.image}
        alt={`'cover of ' + ${book.title}`}
        width='75'
        height='75'
        className=""/>
      </div>
      <div>
      <a href={book.url} className="block text-blue-900  text-md lg:text-xl">
      {book.title}
      </a>
      <p> Author: {book.author}</p>
      </div>
    </div>
    </li>
  )
})}
</ol>
</div>
</div>
    </div>
    </>
  )
}

export default Resources
