import React from 'react'

const Skills = () => {
  return (
    <div class="specials p-5 " id="skills"
   
    >
    <div class="container ">
        <div class="grid">
            <div class="row  p-5 ">
                <h1 className='text-warning mb-5'>My Skills</h1>
                <div class="col-md-4 text-center ">
                    <i class="fa fa-hand-holding-water fa-4x text-success"></i>
                    <p class="h2 dance-font fw-bold my-2">Flutter Framework</p>
                    <p class="lead fst-italic">Flutter is  natively compiled applications for mobile, web, and desktop from a single codebase</p>
                </div>
                <div class="col-md-4 text-center">
                    <i class="fa fa-heart fa-4x text-danger"></i>
                    <p class="h2 dance-font fw-bold my-2">Dart Language</p>
                    <p class="lead fst-italic">Dart is an open-source, general-purpose, object-oriented programming language with C-style syntax developed by Google in 2011</p>
                </div>
                <div class="col-md-4 text-center">
                    <i class="fa fa-hand-point-up fa-4x text-warning"></i>
                    <p class="h2 dance-font fw-bold my-2">Strapi headless Cms</p>
                    <p class="lead fst-italic"> Strapi is an open-source, Node. js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills;