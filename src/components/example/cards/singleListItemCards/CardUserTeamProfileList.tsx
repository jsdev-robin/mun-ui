import React from "react";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Archive, EllipsisVertical, Pencil, Star, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const CardUserTeamProfileList = () => {
  return (
    <div className="space-y-4">
      <Heading as="h6">User Profile Team Card List</Heading>
      <div className="max-w-3xl mx-auto">
        <Card className="p-5">
          <div className="grid gap-x-4 gap-y-2 lg:grid-cols-12 lg:gap-y-0">
            <div className="lg:col-span-3">
              <Link
                href="/"
                className="decoration-2 font-semibold inline-flex items-end gap-x-1 transition-all hover:underline hover:text-primary"
              >
                #Digitalmarketing
              </Link>
              <div className="mx-0.5 mt-1 sm:-mx-1 lg:mt-2">
                <span className="text-xs inline-block rounded-md bg-muted text-muted-foreground sm:m-1 sm:p-2">
                  Marketing
                </span>
                <span className="text-xs inline-block rounded-md bg-muted text-muted-foreground sm:m-1 sm:p-2">
                  Digital
                </span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm mt-1 text-muted-foreground">
                Our group promotes and sells products and services by leveraging
                online marketing tactics
              </p>
              <div className="text-center flex gap-x-3 mt-2">
                <h4 className="text-xs uppercase text-muted-foreground">
                  Members:
                </h4>
                <div className="flex -space-x-2">
                  <Image
                    className="inline-block size-8 rounded-full ring-2 ring-background"
                    width={32}
                    height={32}
                    src="/images/users/01.jpg"
                    alt="Avatar"
                  />
                  <Image
                    className="inline-block size-8 rounded-full ring-2 ring-background"
                    width={32}
                    height={32}
                    src="/images/users/02.jpg"
                    alt="Avatar"
                  />
                  <Image
                    className="inline-block size-8 rounded-full ring-2 ring-background"
                    width={32}
                    height={32}
                    src="/images/users/03.jpg"
                    alt="Avatar"
                  />
                  <Image
                    className="inline-block size-8 rounded-full ring-2 ring-background"
                    width={32}
                    height={32}
                    src="/images/users/04.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="flex items-center justify-end gap-2 lg:flex-col">
                <div className="lg:ms-auto lg:order-2">
                  <Button>Leave team</Button>
                </div>
                <div className="lg:ms-auto lg:order-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon" className="size-7">
                        <EllipsisVertical />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-1" align="end">
                      <Button
                        variant="ghost"
                        size="xs"
                        className="w-full justify-start text-accent-foreground"
                      >
                        <Pencil />
                        Edit team
                      </Button>
                      <Button
                        variant="ghost"
                        size="xs"
                        className="w-full justify-start text-accent-foreground"
                      >
                        <Star />
                        Add to favorites
                      </Button>
                      <Button
                        variant="ghost"
                        size="xs"
                        className="w-full justify-start text-accent-foreground"
                      >
                        <Archive />
                        Archive team
                      </Button>
                      <Separator className="my-1" />
                      <Button
                        variant="ghost"
                        size="xs"
                        className="w-full justify-start text-red-500 hover:text-red-500"
                      >
                        <Trash />
                        Delete team
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardUserTeamProfileList;
