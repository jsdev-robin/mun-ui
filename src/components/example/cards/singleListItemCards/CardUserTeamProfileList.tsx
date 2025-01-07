import React from "react";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Archive,
  Check,
  EllipsisVertical,
  FilesIcon,
  Pencil,
  Plus,
  Star,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CheckboxField from "@/components/ui/checkbox-field";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="xs"
                            className="w-full justify-start text-accent-foreground"
                          >
                            <Pencil />
                            Edit team
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="p-0 gap-0 w-full rounded-lg max-w-[95%] md:max-w-xl">
                          <DialogHeader className="p-5 border-b">
                            <DialogTitle>Import contacts</DialogTitle>
                            <DialogDescription />
                          </DialogHeader>
                          <ScrollArea className="px-4 py-0 max-sm:portrait:max-h-[calc(100vh-300px)] max-sm:landscape:max-h-[calc(100vh-150px)] sm:landscape:max-h-[calc(100vh-200px)]">
                            <div className="grid gap-4 px-1 my-4">
                              <div className="grid w-full gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                  type="text"
                                  id="title"
                                  placeholder="conference"
                                />
                              </div>
                              <div className="grid w-full gap-2">
                                <Label htmlFor="Iindustry">Industry</Label>
                                <Input
                                  type="text"
                                  id="industry"
                                  placeholder="Enter name"
                                />
                              </div>
                              <div className="grid w-full gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                  id="description"
                                  placeholder="Online meeting services group"
                                />
                              </div>
                              <div className="grid flex-1 gap-2">
                                <Label htmlFor="members">Members</Label>
                                <div className="flex items-center flex-1 gap-4">
                                  <Input
                                    type="text"
                                    id="members"
                                    placeholder="Enter name"
                                  />
                                  <Button variant="outline">
                                    <Plus />
                                    Add
                                  </Button>
                                </div>
                              </div>
                              <div className="grid w-full gap-2">
                                <Label htmlFor="Suggested">
                                  Suggested members
                                </Label>
                                <div className="flex items-center gap-2.5">
                                  <div className="relative inline-block">
                                    <Avatar>
                                      <AvatarImage
                                        src="/images/users/01.jpg"
                                        alt="abatar"
                                      />
                                      <AvatarFallback>T</AvatarFallback>
                                    </Avatar>
                                    <span className="block absolute -right-1 -top-1 rounded-full bg-background">
                                      <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                        <CheckboxField className="rounded-full z-10" />
                                        <Check className="shrink-0 size-3 absolute z-0" />
                                      </span>
                                    </span>
                                  </div>
                                  <div className="relative inline-block">
                                    <Avatar>
                                      <AvatarImage
                                        src="/images/users/02.jpg"
                                        alt="abatar"
                                      />
                                      <AvatarFallback>R</AvatarFallback>
                                    </Avatar>
                                    <span className="block absolute -right-1 -top-1 rounded-full bg-background">
                                      <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                        <CheckboxField className="rounded-full z-10" />
                                        <Check className="shrink-0 size-3 absolute z-0" />
                                      </span>
                                    </span>
                                  </div>
                                  <div className="relative inline-block">
                                    <Avatar>
                                      <AvatarFallback>RX</AvatarFallback>
                                    </Avatar>
                                    <span className="block absolute -right-1 -top-1 rounded-full bg-background">
                                      <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                        <CheckboxField className="rounded-full z-10" />
                                        <Check className="shrink-0 size-3 absolute z-0" />
                                      </span>
                                    </span>
                                  </div>
                                  <div className="relative inline-block">
                                    <Avatar>
                                      <AvatarImage
                                        src="/images/users/04.jpg"
                                        alt="abatar"
                                      />
                                      <AvatarFallback>S</AvatarFallback>
                                    </Avatar>

                                    <span className="block absolute -right-1 -top-1 rounded-full bg-background">
                                      <span className="relative flex size-5 flex-col items-center justify-center rounded-full border-2 border-border text-primary bg-primary/40">
                                        <CheckboxField className="rounded-full z-10" />
                                        <Check className="shrink-0 size-3 absolute z-0" />
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="grid w-full gap-2">
                                <Label className="pb-2 block">Upload</Label>
                                <div className="p-12 rounded-md border border-dashed flex flex-col items-center justify-center">
                                  <FilesIcon className="size-16 mx-auto mb-4 stroke-muted-foreground" />
                                  <p className="font-medium text-sm">
                                    Drop your files here or
                                    <span className="text-primary ml-1 hover:underline cursor-pointer">
                                      browse
                                    </span>
                                  </p>
                                  <p className="text-muted-foreground text-sm">
                                    CSV, XLS, DOCX
                                  </p>
                                </div>
                              </div>
                            </div>
                          </ScrollArea>
                          <DialogFooter className="p-4 border-t">
                            <DialogClose asChild>
                              <Button variant="outline">Close</Button>
                            </DialogClose>
                            <Button>Save and change</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

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
