import type { JSX } from 'react';
import tvaGrytlappar from '../assets/tva-grytlappar.jpg'

function CraftForSale(): JSX.Element {
    return (
    <>
    <img src={tvaGrytlappar} alt="grytlapp på köpet!" width={200} height={300}/>
    <h2>Grytlapp på köpet!</h2>
    <p>Vid köp av fyra disktrasor</p>
    </>
  )
};

export default CraftForSale;