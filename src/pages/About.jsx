function About() {
  const name = localStorage.getItem('userName');
  return (
    <>
    <h1>About page</h1>
    <p>{name}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem nemo blanditiis deleniti, deserunt nostrum qui quae dolores a doloremque possimus dignissimos accusamus libero quia ipsum sint, ut minus odit.
      Necessitatibus rerum commodi at assumenda nisi? Atque similique officiis dolor voluptate velit. Doloribus, fuga nam praesentium ratione accusamus animi alias nesciunt fugit eaque rem esse quis architecto. Sequi, dolor facilis.
    </p>
    </>
  )
}

export default About