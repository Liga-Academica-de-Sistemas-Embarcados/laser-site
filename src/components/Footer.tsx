import { getDictionary } from '@/app/dictionaries';
import Image from 'next/image';
import Link from 'next/link';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';

interface SocialIconProps {
  href: string;
  alt: string;
  Icon: IconType;
}

function SocialIcon({ href, alt, Icon }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="flex items-center justify-center rounded-full w-8 h-8 border-[1px] border-background"
    >
      <Icon size={15} />
    </Link>
  );
}

export async  function Footer() {
  const dict = await getDictionary('pt-BR');

  return (
    <footer className="relative bg-solid w-full px-6 md:px-24 pb-10 pt-24">
      <div className="max-w-[1150px] min-[1150px]:mx-auto">
        <div className="flex flex-col items-center mx-4 md:mx-6 mb-6 gap-16">
          <Image src="/logo.svg" alt="LASER" width={240} height={62} className='w-28 md:w-60' />
          <div className="flex w-full gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-sm leading-6">{dict.footer['text-contact-us']}</span>
              <Link
                href="mailto:laser@cin.ufpe.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-extralight leading-6 hover:opacity-85"
              >
                laser@cin.ufpe.br
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <span className="text-sm leading-6">{dict.footer['text-our-address']}</span>
              <Link
                href="https://maps.app.goo.gl/RFfN4eXii5ZSsKoF9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-extralight leading-6 hover:opacity-85"
              >
                Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária,
                <br />
                Recife - PE, 50740-560
              </Link>
            </div>
          </div>
        </div>
        <hr className="bg-background h-[1px] mb-10" />
        <div className="flex gap-4 justify-center">
          <SocialIcon href={dict.footer.social['link-linkedin']} alt="LinkedIn" Icon={FiLinkedin} />
          <SocialIcon href={dict.footer.social['link-instagram']} alt="Instagram" Icon={FiInstagram} />
        </div>
        <span className="mt-6 block text-center text-sm font-extralight leading-6">Copyright &copy; {new Date().getFullYear()} {dict.footer['text-copyright']}</span>
      </div>
    </footer>
  );
}
