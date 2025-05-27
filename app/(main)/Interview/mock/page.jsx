"use client";

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import Quiz from '../_components/quiz';

const MockInterviewPage = () => {
    return( 
    <div>
        <div className='flex flex-col space-y-2 mx-2'>
            <Link href="/Interview">
                <Button variant="link" className="gap-2 pl-0">
                    <ArrowLeft className='h-4 w-4'/>
                    Back to Interviews Preparation
                </Button>
            </Link>
        </div>
        <div>
            <h1 className='text-5xl font-bold gradient-title'>Mock Interview</h1>
            <p className='text-muted-foreground'>
                This is a mock interview page. You can use this page to practice your interview skills with industry specific Questions.
            </p>
        </div>
        <div>
            <Quiz/>
        </div>
    </div>
    );
};

export default MockInterviewPage;