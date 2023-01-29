import React from "react";
import Post from "../features/Post";
import "../css/feed.css";
import FeedNav from "../component/FeedNav";

function Feed() {
  return (
    <div>
      <FeedNav />
      <div className="feed">
        <div className="left-feed">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Iure ipsam esse quas ab, dolorum nemo dolores?</li>
            <li>Molestiae numquam ut sint vitae labore dicta perspiciatis.</li>
            <li>Voluptas deserunt quia quae iste labore repudiandae ab.</li>
            <li>
              Maxime temporibus et praesentium perspiciatis porro recusandae
              voluptates.
            </li>
            <li>Quae qui suscipit quas ab beatae dolor dolorum!</li>
            <li>Nemo, dolorum eveniet animi assumenda id obcaecati quidem!</li>
            <li>
              Iure officia esse numquam delectus repellendus, aperiam vitae.
            </li>
            <li>
              Deleniti magnam qui, maxime impedit repellendus quis perferendis.
            </li>
            <li>Eum incidunt in reiciendis ad numquam tenetur! Iusto?</li>
          </ul>
          <hr />
          <hr />
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Iure ipsam esse quas ab, dolorum nemo dolores?</li>
            <li>Molestiae numquam ut sint vitae labore dicta perspiciatis.</li>
            <li>Voluptas deserunt quia quae iste labore repudiandae ab.</li>
            <li>
              Maxime temporibus et praesentium perspiciatis porro recusandae
              voluptates.
            </li>
            <li>Quae qui suscipit quas ab beatae dolor dolorum!</li>
            <li>Nemo, dolorum eveniet animi assumenda id obcaecati quidem!</li>
            <li>
              Iure officia esse numquam delectus repellendus, aperiam vitae.
            </li>
            <li>
              Deleniti magnam qui, maxime impedit repellendus quis perferendis.
            </li>
            <li>Eum incidunt in reiciendis ad numquam tenetur! Iusto?</li>
          </ul>
          <hr />
          <hr />
        </div>
        <div className="feed-container">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="right-feed">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Iure ipsam esse quas ab, dolorum nemo dolores?</li>
            <li>Molestiae numquam ut sint vitae labore dicta perspiciatis.</li>
            <li>Voluptas deserunt quia quae iste labore repudiandae ab.</li>
            <li>
              Maxime temporibus et praesentium perspiciatis porro recusandae
              voluptates.
            </li>
            <li>Quae qui suscipit quas ab beatae dolor dolorum!</li>
            <li>Nemo, dolorum eveniet animi assumenda id obcaecati quidem!</li>
            <li>
              Iure officia esse numquam delectus repellendus, aperiam vitae.
            </li>
            <li>
              Deleniti magnam qui, maxime impedit repellendus quis perferendis.
            </li>
            <li>Eum incidunt in reiciendis ad numquam tenetur! Iusto?</li>
          </ul>
          <hr />
          <hr />
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Iure ipsam esse quas ab, dolorum nemo dolores?</li>
            <li>Molestiae numquam ut sint vitae labore dicta perspiciatis.</li>
            <li>Voluptas deserunt quia quae iste labore repudiandae ab.</li>
            <li>
              Maxime temporibus et praesentium perspiciatis porro recusandae
              voluptates.
            </li>
            <li>Quae qui suscipit quas ab beatae dolor dolorum!</li>
            <li>Nemo, dolorum eveniet animi assumenda id obcaecati quidem!</li>
            <li>
              Iure officia esse numquam delectus repellendus, aperiam vitae.
            </li>
            <li>
              Deleniti magnam qui, maxime impedit repellendus quis perferendis.
            </li>
            <li>Eum incidunt in reiciendis ad numquam tenetur! Iusto?</li>
          </ul>
          <hr />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Feed;
