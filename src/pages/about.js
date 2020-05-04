import React from 'react'
import Layout from '../components/layout'
import me from "./about_me.jpg"
import styled from 'styled-components'

const StyledImage = styled.img`
  max-width: 50%;
  align-self: center;
`

export default () => (
  <Layout>
    <h1>
      Hello there!
    </h1>

    <StyledImage src={me} alt="me"/>

    <p>
      My name is Will.  I'm a software engineer by weekday, outdoor enthusiast by weekend,
      and classic rock fan for all the times in between.
    </p>

    <h3>
    Software
    </h3>
    <p>
      I've been engineering quality tools for Intuit's Consumer Group (the likes of TurboTax & Mint)
      since the start of 2018. I've done lots of cool work with cloud infrastructure, performance testing
      and designing systems that need to scale a LOT, Object Relational Mappings, and even some dipping into
      the still-developing world of containers. I plan on making blog posts from time to time about interesting
      things I learn and / or want to share, but if you really want more details on my work experience for one
      reason or another it'd probably be best to check <a href="https://www.linkedin.com/in/william-tait/">here</a>.
    </p>

    <p>
      Outside of work I have my head constantly bobbing between about 3/4 different personal projects,
      all in widely different areas. This website was the first one to reach MVP stage, if you'd like to
      learn more about how I set it up I dedicated my <a href="https://wtait.me/post1/">first blog post </a> 
      to exactly that! Another project that hasn't come off paper is a mobile app to combine the
      vocal game of "Telephone" with language translation in a fun-to-use way. And on yet a another plane of
      focus is my interest in more system-level programming (OS's, I/O & scheduling, networking libraries) which
      is why <a href="https://doc.rust-lang.org/book/index.html">Rust</a> has really caught my attention as of late.
      My plan for now is to make it through the book when I have time, following along actively with any presented
      exercises, and I'm sure project ideas will pop into my head soon enough after.
    </p>

    <h3>
    The Outdoors
    </h3>
    <p>
      I was very lucky to grow up by the beach, and so have always loved the ocean + generally being outside.
      I play beach volleyball and surf on a regular basis (I currently have more boards than wheels on my car...),
      and even when the waves are low I've got a set of snorkel gear in case I want to go peek at some garibaldi,
      California's beautiful state fish. Away from the coast I also enjoy hiking a lot
      / camping from time to time. I was lucky to catch a brief glimpse of the
      <a href="https://www.newsweek.com/blood-moon-super-blood-wolf-moon-photos-red-moon-1298867"> Super Wolf Blood Moon </a>
      from out in Joshua Tree National Park earlier this year. Maybe one day I'll add a photo gallery section to this
      site so I can share pictures of all my great experiences rather than describing them in boring detail!
    </p>

    <h3>
    Music
    </h3>
    <p>
      If my software interests sound far-flung and chaotic, my music taste is quite simply undescribable.
      I mean, just look at the variance in some of my Spotify artists under the letter 'D'!
      <ul>
        <li><a href="https://open.spotify.com/artist/568ZhdwyaiCyOGJRtNYhWf?si=IsFpDBXLSLOSnDAJjXSo8Q">Deep Purple</a></li>
        <li><a href="https://open.spotify.com/artist/6H1RjVyNruCmrBEWRbD0VZ?si=FF7N8ZnMTZqVXi1TA7nhgg">Def Leppard</a></li>
        <li><a href="https://open.spotify.com/artist/4CYeVo5iZbtYGBN4Isc3n6?si=CjhiuE95QQO83EuP1JCePg">Dio</a></li>
        <li><a href="https://open.spotify.com/artist/0WwSkZ7LtFUFjGjMZBMt6T?si=I602IK-XS5OLCon-ut_6Zw">Dire Straits</a></li>
        <li><a href="https://open.spotify.com/artist/5dbuFbrHa1SJlQhQX9OUJ2?si=l-MeGcdUTlCjWz8W-jQVHw">Don Henley</a></li>
        <li><a href="https://open.spotify.com/artist/22WZ7M8sxp5THdruNY3gXt?si=gLKkN6WUT92vxh0h80hG2g">The Doors</a></li>
        <li><a href="https://open.spotify.com/artist/2aaLAng2L2aWD2FClzwiep?si=EzlbNuBGR7m8UZFjHdma6w">Dream Theater</a></li>
        <li><a href="https://open.spotify.com/artist/0GLjY74A6lDzGCGg2J73aq?si=lS7FIlamR5Kap5wlhVtzbA">The Dukes of Dixieland</a></li>
      </ul>

      <br/>
      No matter what however, I'll always give thanks to my parents that the first song I ever remember
      hearing as a child has remained one of my all-time favorites.
    </p>

    <iframe src="https://open.spotify.com/embed/track/3qT4bUD1MaWpGrTwcvguhb" width="300" height="180" frameborder="0" allowtransparency="true" allow="encrypted-media" title="my first song"></iframe>
  </Layout>
)
