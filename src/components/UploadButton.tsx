"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

import Dropzone from "react-dropzone"

const UploadDropzone = () => {
    return (
        <Dropzone multiple={false} onDrop={(acceptedFiles) => {
            console.log(acceptedFiles);
        }}>
            {({ getRootProps, getInputProps, acceptedFiles }) => (
                <div {...getRootProps()} className="border h-64 m-4 border-dashed border-gray-300 rounded-lg">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                example
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Dropzone>
    );
};


const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={(v) => {
            if(!v) {
                setIsOpen(v)
            }
        }}>
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>
            
            <DialogContent>
                <UploadDropzone />
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton