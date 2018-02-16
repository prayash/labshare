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
  Slide
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

const images = {
  fiddle: require('./assets/fiddle.jpg'),
  flow: require('./assets/flow.png'),
  guitar: require('./assets/guitar.jpg'),
  mastering: require('./assets/mastering.png'),
  soundcloud: require('./assets/soundcloud.png'),
  studio: require('./assets/studio.jpg'),
  yootoob: require('./assets/yootoob.png')
}

const theme = createTheme(
  {
    primary: '#fafafa',
    secondary: 'hsl(60, 1%, 16%)',
    tertiary: '#03A9FC',
    quarternary: '#03A9FC'
  },
  {
    primary: {
      name: 'Lato',
      googleFont: true,
      styles: ['200', '400', '700']
    }
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transitionDuration={420}
        theme={theme}
        progress="bar"
        controls={false}
      >
        <Slide transition={['fade']}>
          <Heading textSize="2em">5 Things Music Taught Me</Heading>
          <br />
          <Heading textSize="2em">
            <span role="img" aria-label="music">
              🎼
            </span>{' '}
            <span role="img" aria-label="music">
              🎸
            </span>{' '}
            <span role="img" aria-label="computer">
              💻
            </span>
          </Heading>
        </Slide>

        <Slide transition={['slide', 'fade']}>
          <Heading textSize="2em">
            Hey, hi.{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.guitar} />
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.studio} />
        </Slide>

        <Slide
          transition={['fade']}
          bgImage={images.soundcloud}
          bgSize="contain"
          bgRepeat="no-repeat"
        />

        <Slide
          transition={['fade']}
          bgImage={images.yootoob}
          bgSize="contain"
          bgRepeat="no-repeat"
        />

        <Slide transition={['slide', 'fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary">
            Zen mind, beginner’s mind.
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
          <Heading size={2} textSize="1.25em" textColor="secondary">
            I use a different guitar tuning for almost every song.
          </Heading>
          <List>
            <ListItem textSize="1em">E A D G B E - standard</ListItem>
            <ListItem textSize="1em">E B D# F# B D#</ListItem>
            <ListItem textSize="1em">C G E G B D</ListItem>
            <ListItem textSize="1em">C G D G B C (capo 1)</ListItem>
            <ListItem textSize="1em">D F# A E A D (capo 3)</ListItem>
          </List>
        </Slide>

        {/* <Slide transition={['fade']} bgColor="tertiary" /> */}

        <Slide transition={['slide', 'fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary">
            Flow state is the high we all chase.
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={2} textSize="1.25em" textColor="secondary">
            We do our best work in the Flow Channel.
          </Heading>

          <br />

          <Image width="60%" src={images.flow} />
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary" lineHeight="1.25em">
            Creating music is a dance of{' '}
            <span className="underline">problem-solving</span> and{' '}
            <span className="underline">creativity</span>.
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Image width="90%" src={images.fiddle} />
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.mastering} />
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary">
            Simplicity is the ultimate sophistication.
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Premature optimization is the root of all evil.</Quote>
            <Cite>Donald Knuth</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary">
            Everything is a remix.
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textSize="1.25em" textColor="primary">
            All original ideas are variations of pre-existing ones.
          </Heading>

          <br />

          <BlockQuote>
            <Quote textSize="1em">
              Nothing is original. Steal from anywhere that resonates with
              inspiration or fuels your imagination. Devour old films, new
              films, music, books, paintings, photographs, poems, dreams, random
              conversations, architecture, bridges, street signs, trees, clouds,
              bodies of water, light and shadows. Select only things to steal
              from that speak directly to your soul. If you do this, your work
              (and theft) will be authentic. ... In any case, always remember
              what Jean-Luc Godard said: "It’s not where you take things from –
              it’s where you take them to"..
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
            <Quote>
              <span className="strikethrough">Art</span> Software is never
              finished, only <span className="strikethrough">abandoned</span>{' '}
              maintained.
            </Quote>
            <Cite>Some Wise Fella</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']}>
          <Heading textSize="2em">Fin.</Heading>
        </Slide>
      </Deck>
    )
  }
}
