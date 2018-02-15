import React from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import 'normalize.css'
import 'spectacle/lib/themes/default/index.js'
import './styles.css'

const images = {
  fiddle: require('./assets/fiddle.jpg'),
  flow: require('./assets/flow.jpg'),
  guitar: require('./assets/guitar.jpg'),
  mastering: require('./assets/mastering.png'),
  modular: require('./assets/modular.jpg'),
  soundcloud: require('./assets/soundcloud.png'),
  studio: require('./assets/studio.jpg'),
  youtube: require('./assets/youtube.png')
}

const theme = createTheme(
  {
    primary: '#fafafa',
    secondary: 'hsl(60, 1%, 16%)',
    tertiary: '#03A9FC',
    quarternary: '#03A9FC'
  },
  {
    primary: { name: 'Roboto', googleFont: true, styles: ['200', '400', '700'] }
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={420}
        theme={theme}
        progress="bar"
        controls={false}
      >
        <Slide>
          <Heading textSize="2em">Motifs in Music & Software</Heading>
          <br />
          <Heading textSize="2em">
            <span role="img" aria-label="music">
              🎼
            </span>
            {' + '}
            <span role="img" aria-label="computer">
              💻
            </span>
          </Heading>
        </Slide>

        <Slide>
          <Heading textSize="2em">
            Hey, hi.{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </Heading>
        </Slide>

        <Slide>
          <Image width="100%" src={images.guitar} />
        </Slide>

        <Slide>
          <Image width="100%" src={images.studio} />
        </Slide>

        <Slide align="center flex-start">
          <Image width="100%" src={images.soundcloud} />
        </Slide>

        <Slide align="center flex-start">
          <Image width="100%" src={images.youtube} />
        </Slide>

        {/* <Slide>
          <Layout>
            <Fill>
              <Image width="100%" src={images.soundcloud} />
            </Fill>
            <Fill>
              <Image width="100%" src={images.youtube} />
            </Fill>
          </Layout>
        </Slide> */}

        <Slide>
          <Heading
            size={2}
            textSize="1.25em"
            textColor="secondary"
            lineHeight="1.25em"
          >
            There are quite a few parallels when it comes down to the process of
            making music vs. building software.
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary">
            The Beginner’s Mind
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              In the beginner’s mind there are many possibilities, in the
              expert’s mind there are few.
            </Quote>
            <Cite>Shunryu Suzuki</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']}>
          <Heading
            size={2}
            textSize="1.25em"
            textColor="secondary"
            lineHeight="1.25em"
          >
            Being an expert and knowing all the limitations of something can
            hurt you. Blissful ignorance is bliss (sometimes).
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textSize="1.25em" textColor="primary">
            I use a different guitar tuning for almost every song.
          </Heading>
          <List textColor="primary">
            <ListItem textSize="1em">E A D G B E (standard)</ListItem>
            <ListItem textSize="1em">E B D# F# B D#</ListItem>
            <ListItem textSize="1em">C G E G B D</ListItem>
            <ListItem textSize="1em">C G D G B C capo1</ListItem>
            <ListItem textSize="1em">D F# A E A D capo3</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary">
            Flow: The High We All Chase
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Image width="80%" src={images.flow} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary" lineHeight="1.25em">
            Like music, the act of building programs is a dance of
            problem-solving and creativity.
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Image width="80%" src={images.fiddle} />
        </Slide>

        <Slide transition={['fade']}>
          <Image width="90%" src={images.mastering} />
        </Slide>

        <Slide transition={['fade']}>
          <Text textSize="1em" margin="0 0 1em 0" textColor="#282828">
            Oooorrrrrrr this. But let's not go there.
          </Text>
          <Image width="80%" src={images.modular} />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Premature optimization is the root of all evil.</Quote>
            <Cite>Donald Knuth</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary">
            Everything is a Remix
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={2} textSize="1.25em" textColor="#282828">
            All original ideas are variations of pre-existing ones.
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="1em">
              Nothing is original. Steal from anywhere that resonates with
              inspiration or fuels your imagination. Devour old films, new
              films, music, books, paintings, photographs, poems, dreams, random
              conversations, architecture, bridges, street signs, trees, clouds,
              bodies of water, light and shadows. Select only things to steal
              from that speak directly to your soul. If you do this, your work
              (and theft) will be authentic. Authenticity is invaluable;
              originality is nonexistent. And don’t bother concealing your
              thievery. celebrate it if you feel like it. In any case, always
              remember what Jean-Luc Godard said: "It’s not where you take
              things from – it’s where you take them to"..
            </Quote>
            <Cite>Jim Jarmusch</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Art is never finished, only abandoned.</Quote>
            <Cite>Leonardo Da Vinci</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Software is never finished, only maintained.</Quote>
            <Cite>Some Wise Fella</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
