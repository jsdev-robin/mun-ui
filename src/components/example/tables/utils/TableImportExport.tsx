import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  ArrowUpDown,
  ChevronDown,
  Download,
  Files,
  Upload,
} from "lucide-react";
import Text from "@/components/ui/text";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import CheckboxField from "@/components/ui/checkbox-field";
import RadioField from "@/components/ui/radio-field";
import { GmailIcon, MsWordIcon, NotionIcon } from "@/app/assets/icons/Index";

const TableImportExport = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="xs">
          <ArrowUpDown />
          Import / Export
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-1" align="end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="xs" className="w-full justify-start">
              <Download />
              Import Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 rounded-lg max-md:max-w-[95%]">
            <DialogHeader className="p-4 border-b">
              <DialogTitle>Import contacts</DialogTitle>
              <DialogDescription />
            </DialogHeader>
            <ScrollArea className="max-h-[calc(95vh-100px)]">
              <ScrollArea className="h-40 border-b">
                <div className="px-4 space-y-4">
                  <div className="flex items-center justify-between border-b pb-4 gap-10">
                    <div className="flex gap-4">
                      <GmailIcon className="size-8" />
                      <div>
                        <Text variant="sm" className="font-medium">
                          Gmail account
                        </Text>
                        <Text variant="sm" className="text-muted-foreground">
                          Import your Gmail account contacts.
                        </Text>
                      </div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                  <div className="flex items-center justify-between border-b gap-10 pb-4">
                    <div className="flex gap-4">
                      <NotionIcon className="size-8" />
                      <div>
                        <Text variant="sm" className="font-medium">
                          Notion
                        </Text>
                        <Text variant="sm" className="text-muted-foreground">
                          Add your contacts to a Notion file and upload it here.
                        </Text>
                      </div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                  <div className="flex items-center justify-between gap-10 pb-4">
                    <div className="flex gap-4">
                      <MsWordIcon className="size-8" />
                      <div>
                        <Text variant="sm" className="font-medium">
                          Word file
                        </Text>
                        <Text variant="sm" className="text-muted-foreground">
                          Add your contacts to a Word file and upload it here.
                        </Text>
                      </div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </ScrollArea>
              <div className="px-4 py-4">
                <Label className="pb-2 block">Upload</Label>
                <div className="p-12 rounded-md border border-dashed flex flex-col items-center justify-center">
                  <Files className="size-16 mx-auto mb-4 stroke-muted-foreground" />
                  <Text variant="sm" className="font-medium">
                    Drop your files here or
                    <span className="text-primary ml-1 hover:underline cursor-pointer">
                      browse
                    </span>
                  </Text>
                  <Text className="text-muted-foreground mt-1" variant="sm">
                    CSV, XLS, DOCX
                  </Text>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="xs" className="w-full justify-start">
              <Upload />
              Export Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 rounded-lg max-md:max-w-[95%]">
            <DialogHeader className="p-4 border-b">
              <DialogTitle>Export contacts (2)</DialogTitle>
              <DialogDescription />
            </DialogHeader>
            <ScrollArea className="max-h-[calc(95vh-100px)]">
              <ScrollArea className="h-96 border-b">
                <div className="px-4 space-y-4">
                  <div className="border-b pb-4">
                    <Label className="pb-4 block">
                      Choose what contact details want to export:
                    </Label>
                    <ul className="columns-2 space-y-4">
                      <li className="flex items-center gap-2">
                        <CheckboxField id="name" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="name"
                        >
                          Name
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckboxField id="user-id" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="user-id"
                        >
                          User ID
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckboxField id="email" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="email"
                        >
                          Email
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckboxField id="address" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="address"
                        >
                          Address
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckboxField id="phone" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="phone"
                        >
                          Phone
                        </Label>
                      </li>
                    </ul>
                  </div>
                  <div className="border-b pb-4">
                    <Label className="pb-4 block">
                      Choose your format for exporting your contacts:
                    </Label>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-2">
                        <RadioField id="csv" name="sheet" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="csv"
                        >
                          Regular CSV file
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <RadioField id="google" name="sheet" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="google"
                        >
                          Google CSV file
                        </Label>
                      </li>
                    </ul>
                  </div>
                  <div className="pb-4">
                    <Label className="pb-4 block">Date range</Label>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-2">
                        <RadioField id="today" name="date-range" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="today"
                        >
                          Today (18 Feb)
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <RadioField id="current-month" name="date-range" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="current-month"
                        >
                          Current month
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <RadioField id="last-7-days" name="date-range" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="last-7-days"
                        >
                          Last 7 days
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <RadioField id="last-month" name="date-range" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="last-month"
                        >
                          Last month
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <RadioField id="all" name="date-range" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="all"
                        >
                          All
                        </Label>
                      </li>
                      <li className="flex items-center gap-2">
                        <RadioField id="custom" name="date-range" />
                        <Label
                          className="text-accent-foreground font-normal"
                          htmlFor="custom"
                        >
                          Custom
                        </Label>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
              <div className="flex items-ceter justify-end gap-4 p-4">
                <DialogClose asChild>
                  <Button variant="destructive">Close</Button>
                </DialogClose>
                <Button>Export</Button>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </PopoverContent>
    </Popover>
  );
};

export default TableImportExport;
