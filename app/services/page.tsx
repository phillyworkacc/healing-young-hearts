'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import AboutUsImage from '@/public/assets/hero-section-bg.jpeg'

export default function ServicesPage () {
   return (<>
      <Header />
      <ImageSection image={AboutUsImage} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Services</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-sm pd-05 full line-height-15">
            At Healing Young Hearts, I support schools, colleges and organisations to create emotionally safe, relational and trauma-informed cultures where children, young people and adults can thrive.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            My work sits at the intersection of education, mental health, neuroscience and relationships. I am passionate about helping organisations move beyond surface-level awareness towards meaningful, sustainable and evidence-informed practice that genuinely changes experiences and outcomes for both staff and students.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            I believe trauma-informed practice is not about lowering expectations or introducing “soft” approaches. It is about understanding behaviour, stress, belonging and learning through a relational, developmental and neurobiological lens, whilst building environments that are both compassionate and boundaried.
         </div>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            Much of my work is grounded in research relating to:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trauma and attachment</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Stress and neurodevelopment</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Belonging and social buffering</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Latent vulnerability</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Relational safety</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Emotionally sustainable systems</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Neurodiversity and inclusion</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Staff wellbeing and reflective practice</li>
         </ul>
         <div className="text-sm pd-05 full line-height-15">
            I am particularly interested in how systems either strengthen connection and belonging, or unintentionally contribute to social thinning — where stress, exclusion and repeated negative experiences gradually reduce opportunities for trust, safety and support. Through training, consultancy, supervision and systems work, I help organisations strengthen the relational conditions that allow both children and adults to feel safe, connected and able to flourish.
         </div>
      </CustomSection>
      
      <CustomSection 
         textColor="black" bgColor="#ebebeb"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1 mt-1">Training</div>
         <div className="text-sm pd-05 full line-height-15">
            I deliver engaging, reflective and evidence-informed training for schools, colleges, organisations and multi-agency teams across the UK and Ireland.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            My training combines neuroscience, psychology, trauma-informed practice and relational approaches with practical, real-world strategies that staff can immediately apply within educational and organisational settings.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            I aim to create training experiences that are thoughtful, accessible and emotionally containing — balancing research, reflection, challenge and hope. Participants often describe my training as both deeply reflective and highly practical.
         </div>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            Areas of Training Include:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trauma-Informed Practice</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Relational Approaches</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Behaviour, Stress & Regulation</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Belonging & Inclusion</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Mental Health & Wellbeing</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Neurodiversity & Neuroaffirming Practice</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Attachment & Developmental Trauma</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Staff Wellbeing & Secondary Trauma</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Leadership & Culture</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Parent & Community Workshops</li>
         </ul>
         <div className="text-sm pd-05 full mt-2 line-height-15">
            I regularly work with:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Primary Schools</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Secondary Schools</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Further Education Colleges</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Alternative Provision</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trusts & Local Authorities</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Community & Multi-Agency Organisations</li>
         </ul>
      </CustomSection>

      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1 mt-1">Consultancy</div>
         <div className="text-sm pd-05 full line-height-15">
            I provide collaborative consultancy support to help organisations embed trauma-informed and relational approaches in ways that are meaningful, sustainable and responsive to their unique context.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            My consultancy work is rooted in curiosity, reflection and systems thinking. Rather than offering “quick fixes,” I work alongside leaders and teams to explore culture, relationships, behaviour, belonging and emotional safety across the organisation.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            I am particularly passionate about supporting schools and colleges to bridge the gap between research and lived reality — helping staff translate theory into everyday practice, policy, leadership and environments.
         </div>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            Consultancy Support Includes:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trauma-Informed Audits & Reviews</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Relational Practice Development</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Behaviour & Culture Review</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Inclusion & Belonging Strategy</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Leadership Reflection & Coaching</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>FE & Post-16 Specialist Consultancy</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Safeguarding & Emotional Safety</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Reflective Practice Structures</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Policy & Strategy Development</li>
         </ul>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            My approach is compassionate, reflective and honest. I believe sustainable change happens through relationships, shared understanding and emotionally safe professional cultures.
         </div>
      </CustomSection>

      <CustomSection 
         textColor="black" bgColor="#ebebeb"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1 mt-1">Speaker</div>
         <div className="text-sm pd-05 full line-height-15">
            I deliver keynote talks, conference sessions and professional speaking events focused on trauma-informed practice, belonging, relationships, mental health and emotionally sustainable systems.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            My speaking combines research, storytelling, neuroscience and practical reflection, helping audiences think differently about behaviour, vulnerability, inclusion and human connection.
         </div>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            I am especially passionate about:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Belonging in education</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Relational leadership</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Neurodiversity and emotional wellbeing</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Staff wellbeing and burnout</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Social buffering and protective relationships</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trauma, stress and learning</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Emotionally sustainable schools and colleges</li>
         </ul>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            My aim is always to create presentations that are thoughtful, grounded, emotionally resonant and practically useful — balancing evidence, humanity and hope.
         </div>
      </CustomSection>

      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1 mt-1">Systems Change</div>
         <div className="text-sm pd-05 full line-height-15">
            I support trusts, colleges, local authorities and organisations to embed trauma-informed and relational approaches at whole-system level.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            This work is about much more than training. It is about creating cultures, systems and environments that consistently strengthen emotional safety, belonging, reflection and connection across the organisation.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            I am particularly interested in how educational systems can act as protective relational environments — strengthening social buffering and reducing the risks associated with social thinning, exclusion and disconnection.
         </div>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            My systems work often focuses on:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Leadership culture</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Relational consistency</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Behaviour and belonging</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Emotionally sustainable practice</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Staff wellbeing</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Inclusion and participation</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Reflective structures</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Implementation and sustainability</li>
         </ul>
         <div className="text-sm pd-05 full mt-2 line-height-15">
            System Change Support Includes:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Whole-System Implementation</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Strategic Leadership Support</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trust & College Group Development</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Multi-Agency Collaboration</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Belonging & Inclusion Strategy</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trauma-Informed Framework Design</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Evaluation & Impact Planning</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Community & Partnership Development</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Reflective Culture Development</li>
         </ul>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            I believe sustainable systems change happens when organisations create environments where people feel psychologically safe, relationally connected and genuinely valued.
         </div>
      </CustomSection>

      <CustomSection 
         textColor="black" bgColor="#ebebeb"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1 mt-1">Supervision</div>
         <div className="text-sm pd-05 full line-height-15">
            Alongside my own work, I collaborate with a trusted network of highly experienced school-based therapists, therapeutic practitioners and associates who offer both individual and group supervision tailored to the needs of schools, colleges and organisations.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            Supervision provides a protected space for reflection, processing, curiosity and support — helping staff feel contained, connected and better able to sustain meaningful relational work.
         </div>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            Supervision Offers Include:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Individual Reflective Supervision</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Group Supervision</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Pastoral Team Supervision</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Leadership Reflection Spaces</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>DSL & Safeguarding Supervision</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Staff Wellbeing Support</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Therapeutic Consultation</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trauma-Informed Reflective Practice</li>
         </ul>
         <div className="text-sm pd-05 full mt-1 line-height-15">
            My supervision approach is relational, compassionate and reflective, creating spaces where staff can think deeply about behaviour, vulnerability, relationships and the emotional impact of the work they carry.
         </div>
      </CustomSection>
      <Footer />  
   </>)
}
