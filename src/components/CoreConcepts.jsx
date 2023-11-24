import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts(){
  return (
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      <>
        {/* the following syntax is used when 
      component prop names DO NOT match the object prop names
      <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}/> 
        
      the following syntax is used when 
      component prop names MATCH the object prop names               
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </>
      {CORE_CONCEPTS.map((conceptItem) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
    <h2>Time to get started!</h2>
  </section>
  )
}