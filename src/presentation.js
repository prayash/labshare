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
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

const images = {
  fiddle: require('./assets/fiddle.jpg'),
  flow: require('./assets/flow.png'),
  guitar: require('./assets/guitar.jpg'),
  mastering: require('./assets/mastering.png'),
  soundcloud: require('./assets/soundcloud.png'),
  soundcloudSafari: require('./assets/soundcloud-safari.png'),
  studio: require('./assets/studio.jpg'),
  yootoob: require('./assets/yootoob.png'),
  queueProtocol: require('./assets/queue-protocol.png'),
  arrangementView: require('./assets/arrangement-view.png'),
}

const theme = createTheme(
  {
    primary: '#fafafa',
    secondary: 'hsl(60, 1%, 16%)',
    tertiary: '#03A9FC',
    quarternary: '#03A9FC',
  },
  {
    primary: {
      name: 'Lato',
      googleFont: true,
      styles: ['200', '400', '700'],
    },
  }
)

const Paragraph = (props) => (
  <p {...props} style={{ textAlign: 'left', lineHeight: 1.3 }}></p>
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
          <Heading textSize="2em">Parallels in Programming and Music</Heading>
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
            Hi, I'm Prayash.{' '}
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

        <Slide transition={['fade']}>
          <Image width="100%" src={images.soundcloudSafari} />
        </Slide>

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

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textSize="1.25em" textColor="secondary">
            🎸
          </Heading>

          <Paragraph>
            I use a different guitar tuning for almost every song. This helps me
            discard old patterns and open myself up to new ones.
          </Paragraph>
          <List>
            <ListItem textSize="0.75em">E A D G B E - standard</ListItem>
            <ListItem textSize="0.75em">E B D# F# B D#</ListItem>
            <ListItem textSize="0.75em">C G E G B D</ListItem>
            <ListItem textSize="0.75em">C G D G B C (capo 1)</ListItem>
            <ListItem textSize="0.75em">D F# A E A D (capo 3)</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textSize="1.25em" textColor="secondary">
            💻
          </Heading>

          <Paragraph>
            Relying on old patterns can be great, but sometimes we want to break
            out of those old patterns.
          </Paragraph>

          <Paragraph>
            Building an API, or a subsystem from a blank slate is liberating.
          </Paragraph>
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary">
            Flow state is the optimal place of productivity.
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={2} textSize="1.25em" textColor="secondary">
            We do our best work in the Flow Channel.
          </Heading>

          <br />

          <Image width="60%" src={images.flow} />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textSize="1.25em" textColor="secondary">
            🎸
          </Heading>

          <Paragraph>
            Sometimes, musical technique has to catch up to the idea we have in
            our heads in order for the music to materialize.
          </Paragraph>

          <Paragraph>
            Technique ✋ -------------------------------------------- 🤚Music
          </Paragraph>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textSize="1.25em" textColor="secondary">
            💻
          </Heading>

          <Paragraph>
            Working with new technologies, unfamiliar APIs, programming within a
            new paradigm, or cracking a tough programming problem are times when
            we lose ourselves in the moment.
          </Paragraph>

          <Paragraph>
            Trusting in one's ability to figure it out via docs, sample code, or
            reading through source code.
          </Paragraph>
        </Slide>

        <Slide transition={['slide', 'fade']} bgColor="tertiary">
          <Heading textSize="2em" textColor="primary" lineHeight="1.25em">
            Software engineering is a dance of{' '}
            <span className="underline">problem-solving</span> and{' '}
            <span className="underline">creativity</span> just like music
            production.
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

        <Slide transition={['fade']}>
          <Paragraph>
            When in doubt, I like to stub out the API to get a 'feel' for it.
          </Paragraph>
          <Image width="100%" src={images.queueProtocol} />
        </Slide>

        <Slide transition={['fade']}>
          <Paragraph>
            Broad strokes on the canvas is almost always the best place to
            start. The structure of a composition as a whole is much more
            important than minutiae.
          </Paragraph>
          <Image width="100%" src={images.arrangementView} />
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
              films, music, books, paintings, photographs ... In any case,
              always remember what Jean-Luc Godard said: "It’s not where you
              take things from – it’s where you take them to"..
            </Quote>
            <Cite>Jim Jarmusch</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']}>
          <Paragraph>
            There's so much to be learned from other places. Concepts from game
            development like game-loop have proven timeless. UI architectural
            patterns from the Web can be insightful. Case in point,{' '}
            <strong>SwiftUI</strong>!
          </Paragraph>

          <Paragraph>
            SwiftUI is inspired by the architecture of JavaScript libraries like
            Elm and React. The new thing it's doing is using the type system to
            optimize out the static subset of the view graph.
          </Paragraph>

          <Paragraph>
            Declarative UIs are the next generation of user interface
            development (we'll take our sweet time getting there, though).
          </Paragraph>
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

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              <span className="strikethrough">Art</span> Software is never
              finished, only <span className="strikethrough">abandoned</span>{' '}
              <span className="strikethrough">maintained</span> deprecated.
            </Quote>
            <Cite>Some Wise Fella</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              <span className="strikethrough">Art</span> Software is never
              finished, only <span className="strikethrough">abandoned</span>{' '}
              <span className="strikethrough">maintained</span>{' '}
              <span className="strikethrough">deprecated</span>{' '}
              version-controlled.
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
