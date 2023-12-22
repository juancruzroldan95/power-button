import Image from 'next/image';
import React from 'react';

export default function PhotoIcon() {
  return (
    <>
      <Image src="/pictureIcon.png" alt="Photo Icon" width={80} height={80} />
    </>
  );
}
