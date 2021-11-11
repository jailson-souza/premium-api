import container from "@container";
import { UserConsumerInterface } from "@api/user/interface/user-consumer-interface";

export default async function consumerApp() {
    container.resolve<UserConsumerInterface>("userConsumer").subscribeToTopics();
}
