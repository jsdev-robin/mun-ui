import React from "react";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const CardLineImage = () => {
  return (
    <div className="space-y-4">
      <Heading as="h6">Inline with Image</Heading>
      <div className="max-w-3xl mx-auto">
        <Card className="p-5">
          <div className="grid gap-4 sm:grid-cols-12">
            <div className="sm:order-2 sm:col-span-5">
              <div className="overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/images/banner/analytics-demo.svg"
                  alt="banner"
                  width={100}
                  height={100}
                  className="w-full ps-5 mt-5 h-auto"
                />
              </div>
            </div>
            <div className="sm:order-1 sm:col-span-7">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-semibold text-lg text-accent-foreground">
                    Explore the most popular Preline dashboard templates
                  </h3>
                  <p className="text-muted-foreground mt-1 sm:mt-3">
                    Grab the ones that fit your marketing strategy
                  </p>
                </div>
                <Link
                  href="/"
                  className="text-sm font-medium inline-flex items-center gap-1 text-primary transition-all hover:underline"
                >
                  Explore templates
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardLineImage;
