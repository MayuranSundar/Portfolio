import PortfolioImg from '../../assets/Portfolio.png'
import TheExitImg from '../../assets/The-Exit.png'
import MemeGenImg from '../../assets/Meme-Generator.png'
import CalculatorImg from '../../assets/Calculator.png'

const data = [
    {
      id: 1,
      image: PortfolioImg,
      title: 'Portfolio: React App',
      github: 'https://github.com/MayuranSundar/Portfolio',
      demo: '#',
      demoAvailable: true,
      isPortfolio: true
    },
    {
      id: 2,
      image: TheExitImg,
      title: 'The Exit: Unreal Engine 5 Game',
      github: 'https://github.com/MayuranSundar',
      demoAvailable: false,
      isPortfolio: false
    },
    {
      id: 3,
      image: MemeGenImg,
      title: 'Meme Generator: React App',
      github: 'https://github.com/MayuranSundar/Learning-React/tree/main/meme-generator',
      demo: 'https://mayuransundar.github.io/Meme-Generator/',
      demoAvailable: true,
      isPortfolio: false
    },
    {
      id: 4,
      image: CalculatorImg,
      title: 'Calculator: JavaScript App',
      github: 'https://github.com/MayuranSundar/Learning-JavaScript/tree/main/Calculator',
      demo: 'https://mayuransundar.github.io/Calculator/',
      demoAvailable: true,
      isPortfolio: false
    }
]

export default data