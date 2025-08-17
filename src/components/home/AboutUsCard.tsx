import Image from 'next/image';
import { BaseContentCard, ContentCardProps } from '../BaseContentCard';
import { clsx } from 'clsx';

export function AboutUsCard({ solid }: ContentCardProps) {
  return (
    <BaseContentCard solid={solid} className={clsx({"text-solid": !solid}, "flex flex-col gap-4")}>
      <h2 className="text-3xl">Sobre nós</h2>
      <div className="flex justify-between items-center">
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
          adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
          pellentesque sem placerat in id. Placerat in id cursus mi pretium
          tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
        </p>
        <Image src="/logo.svg" width={256}  height={256} alt="LASER" className="rounded-3xl" style={{
          width: '256px',
          height: '256px',
          objectFit: 'cover',
        }} />
      </div>
    </BaseContentCard>
  );
}
