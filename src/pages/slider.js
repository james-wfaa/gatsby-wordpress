import React from "react"
import Layout from "../components/Layout"
import SimpleSlider from "../components/content-modules/SimpleSlider"
import ContentCardD from "../components/content-blocks/ContentCardD"
import GenericPageSection from "../components/page-sections/GenericPageSection"
const SliderPage = () => {
  return (
    <Layout>
      <GenericPageSection>
        <h1>Here are some very preliminary carousel examples.</h1>
        <p>
          These carousels use a package called{" "}
          <a href="https://react-slick.neostack.com/docs/example/simple-slider">
            react-slick
          </a>
          , which is a React port of{" "}
          <a href="http://kenwheeler.github.io/slick/">slick carousel</a>.
        </p>
        <p>
          These examples use the same set of six "Card D" tiles labeled Slide 1
          through Slide 6 for easy reference.
        </p>
        <p>
          By default Slide 1 is centered, which I think is probably what we
          want.
        </p>
        <p>
          All of the examples are using the "infinite" setting, meaning the
          slides continue in a loop.
        </p>
        <p>This first one has a 1000ms transition speed</p>
      </GenericPageSection>
      <SimpleSlider
        className="center"
        slidesToShow="1"
        dots
        centerMode
        variableWidth
        centerPadding="100px"
      >
        <ContentCardD
          startDate="Slide 1"
          title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
          category="GAME WATCH"
          venue="Keystone Sports Review"
          location="Indianapolis, IN"
        />
        <ContentCardD
          startDate="Slide 2"
          title="Coachella Valley"
          category="UW NOW"
          venue="La Quinta Resort and Club"
          location="La Quinta, CA"
        />

        <ContentCardD
          startDate="Slide 3"
          title="WAA: Tucson Chapter Founders’ Day Celebration"
          category="Founder's Day"
          venue="The Lodge at Ventana Canyon"
          location="Tucson, AZ"
        />
        <ContentCardD
          startDate="Slide 4"
          title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
          category="GAME WATCH"
          venue="Keystone Sports Review"
          location="Indianapolis, IN"
        />
        <ContentCardD
          startDate="Slide 5"
          title="Coachella Valley"
          category="UW NOW"
          venue="La Quinta Resort and Club"
          location="La Quinta, CA"
        />

        <ContentCardD
          startDate="Slide 6"
          title="WAA: Tucson Chapter Founders’ Day Celebration"
          category="Founder's Day"
          venue="The Lodge at Ventana Canyon"
          location="Tucson, AZ"
        />
      </SimpleSlider>
      <GenericPageSection>
        <p>This next one has a 500ms transition speed</p>
      </GenericPageSection>

      <SimpleSlider
        speed="500"
        slidesToShow="1"
        dots
        centerMode
        variableWidth
        centerPadding="10px"
      >
        <ContentCardD
          startDate="Slide 1"
          title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
          category="GAME WATCH"
          venue="Keystone Sports Review"
          location="Indianapolis, IN"
        />
        <ContentCardD
          startDate="Slide 2"
          title="Coachella Valley"
          category="UW NOW"
          venue="La Quinta Resort and Club"
          location="La Quinta, CA"
        />

        <ContentCardD
          startDate="Slide 3"
          title="WAA: Tucson Chapter Founders’ Day Celebration"
          category="Founder's Day"
          venue="The Lodge at Ventana Canyon"
          location="Tucson, AZ"
        />
        <ContentCardD
          startDate="Slide 4"
          title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
          category="GAME WATCH"
          venue="Keystone Sports Review"
          location="Indianapolis, IN"
        />
        <ContentCardD
          startDate="Slide 5"
          title="Coachella Valley"
          category="UW NOW"
          venue="La Quinta Resort and Club"
          location="La Quinta, CA"
        />

        <ContentCardD
          startDate="Slide 6"
          title="WAA: Tucson Chapter Founders’ Day Celebration"
          category="Founder's Day"
          venue="The Lodge at Ventana Canyon"
          location="Tucson, AZ"
        />
      </SimpleSlider>

      <GenericPageSection>
        <p>
          This next one has a 750ms transition speed. This one has a glitch - I
          have the initialSlide set to slide 5, which doesn't seem to play well
          with the infinite scroll feature. The active slide is way offscreen,
          and when you click the prev/next buttons it fast-forwards all the way
          to where the active slide is. I think the takeaway is that we can't
          use that custom initial slide feature, and we need to just put the one
          we want centered as the first item in the data we send.
        </p>
      </GenericPageSection>
      <SimpleSlider
        speed="750"
        slidesToShow="1"
        initialSlide="4"
        centerMode
        dots
        variableWidth
        centerPadding="10px"
      >
        <ContentCardD
          startDate="Slide 1"
          title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
          category="GAME WATCH"
          venue="Keystone Sports Review"
          location="Indianapolis, IN"
        />
        <ContentCardD
          startDate="Slide 2"
          title="Coachella Valley"
          category="UW NOW"
          venue="La Quinta Resort and Club"
          location="La Quinta, CA"
        />

        <ContentCardD
          startDate="Slide 3"
          title="WAA: Tucson Chapter Founders’ Day Celebration"
          category="Founder's Day"
          venue="The Lodge at Ventana Canyon"
          location="Tucson, AZ"
        />
        <ContentCardD
          startDate="Slide 4"
          title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
          category="GAME WATCH"
          venue="Keystone Sports Review"
          location="Indianapolis, IN"
        />
        <ContentCardD
          startDate="Slide 5"
          title="Coachella Valley"
          category="UW NOW"
          venue="La Quinta Resort and Club"
          location="La Quinta, CA"
        />

        <ContentCardD
          startDate="Slide 6"
          title="WAA: Tucson Chapter Founders’ Day Celebration"
          category="Founder's Day"
          venue="The Lodge at Ventana Canyon"
          location="Tucson, AZ"
        />
      </SimpleSlider>
      <GenericPageSection>
        <p>
          All of these are set up to show the dot navigation at mobile, and hide
          it at tablet+, and to hide the prev/next arrow navigation at mobile
          and show it at tablet+.
        </p>
        <p>
          The dots I have already styled so they should be pretty close. The
          arrow/carat nav I have not styled yet.
        </p>
        <p>
          Positioning of the prev/next nav is also an issue... they need to be
          absolutely positioned on the left and right, and they are at a
          different depth level than the slides themselves so we will probably
          need to adjust their positioning at every breakpoint to get them to
          fall between the slides as much as possible.
        </p>
        <p>
          We are most likely NOT going to be able to vary the width between
          slides (adding extra room to accomodate the prev/next buttons, as the
          XD files show). We will need to work with even spacing.
        </p>
        <p>
          Other things... keyboard navigation works out of the box once you've
          set focus on a slide. Swiping works out of the box also.{" "}
        </p>
      </GenericPageSection>
    </Layout>
  )
}

export default SliderPage
