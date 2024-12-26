import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <Image
          src="/your-profile-photo.jpg"
          alt="Profile Photo"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Dabinko Int'l Company</h1>
        <h2 className="text-xl text-gray-600 mb-6">프론트엔드 개발자</h2>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/yourusername" className="text-2xl hover:text-gray-600">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-2xl hover:text-gray-600">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" className="text-2xl hover:text-gray-600">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 mb-4">
          안녕하세요! 저는 3년차 프론트엔드 개발자입니다. 
          사용자 경험을 중심으로 한 웹 애플리케이션 개발에 관심이 많습니다.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">Tools</h3>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/project1.jpg"
              alt="Project 1"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold mb-2">프로젝트 제목 1</h3>
              <p className="text-gray-600 mb-4">
                프로젝트에 대한 간단한 설명을 작성합니다.
              </p>
              <div className="flex gap-2">
                <a href="#" className="text-blue-500 hover:underline">Demo</a>
                <a href="#" className="text-blue-500 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold mb-2">프로젝트 제목 2</h3>
              <p className="text-gray-600 mb-4">
                프로젝트에 대한 간단한 설명을 작성합니다.
              </p>
              <div className="flex gap-2">
                <a href="#" className="text-blue-500 hover:underline">Demo</a>
                <a href="#" className="text-blue-500 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="bg-gray-100 p-6 rounded">
          <p className="mb-4">
            이메일: dabinko@kita.net
          </p>
          <p className="mb-4">
            연락처: 010-1234-5678
          </p>
          <p>
            위치: 서울특별시
          </p>
        </div>
      </section>
    </main>
  )
}