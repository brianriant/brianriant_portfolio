// app/core-mission/components/MissionStory.js
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionStory() {
  return (
    <section id="learn-more">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Our Mission to Makueni
        </h2>

        <div className="relative h-80 w-full rounded-xl overflow-hidden mb-6">
          <Image
            src="/images/mission-overview.jpg"
            alt="Previous mission trip"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            I am excited to announce my participation in the Makueni Mission
            Trip organized by JKUAT Christian Union. This mission is focused on
            spreading the Gospel and providing essential services to communities
            in Makueni County, Kenya.
          </p>

          <h3>Why Makueni?</h3>
          <p>
            Makueni County, located in Kenya's Eastern region, is home to
            communities that face various challenges including limited access to
            healthcare, education, and spiritual guidance. Our mission seeks to
            address these needs through a holistic approach that combines
            evangelism with practical service.
          </p>

          <h3>What We'll Be Doing</h3>
          <p>During our 9-day mission (May 17-25, 2025), our team will be:</p>
          <ul>
            <li>Conducting daily evangelistic outreach in local communities</li>
            <li>
              Organizing children's programs and youth mentorship sessions
            </li>
            <li>
              Providing basic medical checkups in partnership with local
              healthcare providers
            </li>
            <li>Distributing educational materials to schools</li>
            <li>Supporting local churches with leadership training</li>
          </ul>

          <h3>My Personal Commitment</h3>
          <p>
            This mission is deeply important to me as it allows me to share my
            faith while making a tangible difference in the lives of others. I
            believe that the combination of spiritual guidance and practical
            assistance can create lasting positive change in communities.
          </p>

          <p>
            To participate in this mission, I need to raise KSh 1,700 which will
            cover transportation, accommodation, meals, and mission materials.
            Your support, whether through donations or prayers, will help make
            this mission possible.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
