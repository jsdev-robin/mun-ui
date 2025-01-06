import React from "react";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Download, Share2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CheckboxField from "@/components/ui/checkbox-field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CardUserProfileFile = () => {
  return (
    <div className="space-y-4">
      <Heading as="h6">User Profile File Card List </Heading>
      <div className="max-w-3xl mx-auto">
        <Card className="p-4 group">
          <div className="flex items-center gap-3 relative">
            <Image
              src="/images/pattern/01.jpg"
              alt="pattern"
              width={38}
              height={38}
              className="rounded-md object-cover size-[38px]"
            />
            <div className="truncate flex-1">
              <p className="text-accent-foreground font-semibold text-sm truncate block">
                cover_image.jpg
              </p>
              <p className="text-muted-foreground text-xs truncate">
                James Feb 25th, 2023
              </p>
            </div>
            <div className="lg:opacity-0 lg:group-hover:opacity-100">
              <div className="flex items-center gap-0.5 rounded-sm border border-border p-0.5 sm:p-1 lg:shadow-sm">
                <Button variant="ghost" size="icon" className="size-7">
                  <Download />
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-7">
                      <Share2 />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="border-b pb-2">
                      <DialogTitle>Share this file</DialogTitle>
                      <DialogDescription />
                    </DialogHeader>
                    <div className="grid gap-4">
                      <Input
                        type="text"
                        placeholder="Search for team or person"
                      />
                      <Textarea placeholder="Add a message, if you’d like." />
                      <div className="flex items-center gap-3 relative border border-border p-3 rounded-md">
                        <Image
                          src="/images/pattern/02.jpg"
                          alt="pattern"
                          width={38}
                          height={38}
                          className="rounded-md object-cover size-[38px]"
                        />
                        <div className="truncate flex-1">
                          <p className="text-accent-foreground font-semibold text-sm truncate block">
                            cover_image.jpg
                          </p>
                          <p className="text-muted-foreground text-xs truncate">
                            James Feb 25th, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline" size="sm">
                          Close
                        </Button>
                      </DialogClose>
                      <Button size="sm">Share</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Separator orientation="vertical" className="h-5" />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 text-red-500 hover:text-red-500 borderl"
                    >
                      <Trash />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="mb-4">
                      <DialogTitle>Are you sure?</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this file?
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center gap-2.5">
                      <CheckboxField id="notshow" />
                      <Label htmlFor="notshow">
                        Don&lsquo;t show me this again
                      </Label>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline" size="sm">
                          Close
                        </Button>
                      </DialogClose>
                      <Button variant="destructive" size="sm">
                        Yes, I&lsquo;m sure
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardUserProfileFile;
