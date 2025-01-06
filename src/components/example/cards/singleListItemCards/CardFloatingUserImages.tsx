import React from "react";
import Heading from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";

const CardFloatingUserImages = () => {
  return (
    <div className="space-y-4">
      <Heading as="h6">Floating User Images</Heading>
      <div className="max-w-3xl mx-auto">
        <Card className="pt-10 pb-10 px-5 text-center overflow-hidden relative">
          <div className="relative z-10">
            <Heading as="h6" className="font-medium">
              Invite friends
            </Heading>
            <Text className="text-muted-foreground mt-1">
              Invite teammates to collaborate in MUNui
            </Text>
            <div className="mt-3 sm:mt-5">
              <Button variant="outline">Send an invite</Button>
            </div>
          </div>
          <div className="absolute top-5 left-10">
            <Image
              src="/images/users/01.jpg"
              alt="avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="absolute top-20 left-20 hidden sm:block">
            <Image
              src="/images/users/02.jpg"
              alt="avatar"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="absolute left-40 bottom-5">
            <Image
              src="/images/users/03.jpg"
              alt="avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="absolute left-8 bottom-3">
            <Image
              src="/images/users/04.jpg"
              alt="avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="absolute right-40 -top-5">
            <Image
              src="/images/users/05.jpg"
              alt="avatar"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="absolute right-14 top-7">
            <Image
              src="/images/users/06.jpg"
              alt="avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="absolute right-20 top-20">
            <Image
              src="/images/users/07.jpg"
              alt="avatar"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="absolute right-40 bottom-5 hidden sm:block">
            <Image
              src="/images/users/08.jpg"
              alt="avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="absolute right-8 bottom-5">
            <Image
              src="/images/users/09.jpg"
              alt="avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardFloatingUserImages;
