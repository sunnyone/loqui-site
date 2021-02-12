import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Loqui">
    <div>
      <img src="./loqui-en.png" width="667" height="336" />
    </div>

    <h2>Features</h2>
    <ul>
      <li>Connect to multiple servers</li>
      <li>The view that outputs all messages on other channels (call "Common Buffer")</li>
      <li>Window has 4-views (Message of the current channel, nick list, channel list, "Common Buffer")</li>
    </ul>

    <h2>Download</h2>
    <p>
      <a href="https://github.com/sunnyone/loqui/releases">https://github.com/sunnyone/loqui/releases</a>
    </p>
  </Layout>
)

export default IndexPage
