import Button from "../Elements/Button/Button";

const DescProduct = () => {
  return (
    <div className="flex flex-col gap-9 w-4/5">
      <Description/>
      <Tutor/>
      <Materi/>
      <RatingAndReview/>
    </div>
  );
};

const Description = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
        <h5 className="text-h5 text-dark-primary font-semibold font-heading">
          Deskripsi
        </h5>
        <p>
          Foundations of User Experience (UX) Design adalah yang pertama dari
          rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan
          yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain
          pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan
          orang dengan produk seperti situs web, aplikasi seluler, dan objek
          fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan,
          menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat
          pemula mungkin termasuk berempati dengan pengguna, menentukan poin
          rasa sakit mereka, memunculkan ide untuk solusi desain, membuat
          wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan
          umpan balik.
        </p>
      </article>
  )
}

const Tutor = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
        <h5 className="text-h5 text-dark-primary font-semibold font-heading">
          Belajar bersama Tutor Profesional
        </h5>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
            <div className="flex gap-2.5">
              <img src="/avatars/Avatar-08.png" alt="" />
              <div>
                <span className="text-dark-primary font-body font-medium">
                  Gregorius Edrik Lawanto
                </span>
                <p className="text-body-small text-dark-secondary font-body">
                  Senior Talent Acquisition di{" "}
                  <span className="text-dark-secondary font-body font-semibold">
                    WingsGroup
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-body-medium text-dark-primary font-body">
                Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                bekerja sebagai Senior Talent Acquisition Specialist di Wings
                Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
            <div className="flex gap-2.5">
              <img src="/avatars/Avatar-08.png" alt="" />
              <div>
                <span className="text-dark-primary font-body font-medium">
                  Gregorius Edrik Lawanto
                </span>
                <p className="text-body-small text-dark-secondary font-body">
                  Senior Talent Acquisition di{" "}
                  <span className="text-dark-secondary font-body font-semibold">
                    WingsGroup
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-body-medium text-dark-primary font-body">
                Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                bekerja sebagai Senior Talent Acquisition Specialist di Wings
                Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
              </p>
            </div>
          </div>
        </div>
      </article>
  )
}

const Materi = () => {
  return (
    <div className="bg-white flex flex-col gap-6 p-5 border rounded-[10px]">
        <h5 className="text-h5 text-dark-primary font-semibold font-heading">
          Kamu akan Mempelajari
        </h5>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <h6 className="text-h6 text-primary font-heading font-semibold">
              Introducing to Course 1: Foundations of User Experience Design
            </h6>
            <Button
              className="w-6 h-6 flex justify-center items-center"
              src="/icons/Arrow Up Icon.png"
            />
          </div>
          <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
            <p className="text-body-medium text-dark-primary font-body font-medium">
              The basic of user experience design
            </p>
            <div className="flex gap-4 h-6">
              <div className="flex gap-2">
                <img src="/icons/Play Button Icon.png" alt="" />
                <span className="text-body-medium text-dark-secondary font-body">
                  Video
                </span>
              </div>
              <div className="flex gap-2">
                <img src="/icons/Clock Icon.png" alt="" />
                <span className="text-body-medium text-dark-secondary font-body">
                  12 Menit
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
            <p className="text-body-medium text-dark-primary font-body font-medium">
              Jobs in the field of user experience
            </p>
            <div className="flex gap-4 h-6">
              <div className="flex gap-2">
                <img src="/icons/Play Button Icon.png" alt="" />
                <span className="text-body-medium text-dark-secondary font-body">
                  Video
                </span>
              </div>
              <div className="flex gap-2">
                <img src="/icons/Clock Icon.png" alt="" />
                <span className="text-body-medium text-dark-secondary font-body">
                  12 Menit
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
            <p className="text-body-medium text-dark-primary font-body font-medium">
              The product development life cycle
            </p>
            <div className="flex gap-4 h-6">
              <div className="flex gap-2">
                <img src="/icons/Play Button Icon.png" alt="" />
                <span className="text-body-medium text-dark-secondary font-body">
                  Video
                </span>
              </div>
              <div className="flex gap-2">
                <img src="/icons/Clock Icon.png" alt="" />
                <span className="text-body-medium text-dark-secondary font-body">
                  12 Menit
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <h6 className="text-h6 text-primary font-heading font-semibold">
              Universal design, inclusive design, and equity-focused design
            </h6>
            <Button
              className="w-6 h-6 flex justify-center items-center"
              src="/icons/Arrow Down Icon.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <h6 className="text-h6 text-primary font-heading font-semibold">
              Introduction to design sprints
            </h6>
            <Button
              className="w-6 h-6 flex justify-center items-center"
              src="/icons/Arrow Down Icon.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <h6 className="text-h6 text-primary font-heading font-semibold">
              Introduction to UX research
            </h6>
            <Button
              className="w-6 h-6 flex justify-center items-center"
              src="/icons/Arrow Down Icon.png"
            />
          </div>
        </div>
      </div>
  )
}

const RatingAndReview = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
        <h5 className="text-h5 text-dark-primary font-semibold font-heading">
          Rating dan Review
        </h5>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
            <div className="flex gap-2.5">
              <img src="/avatars/Avatar-08.png" alt="" />
              <div>
                <span className="text-dark-primary font-body font-medium">
                  Gregorius Edrik Lawanto
                </span>
                <p className="text-body-small text-dark-secondary font-body">
                  Almuni Batch 2
                </p>
              </div>
            </div>
            <div>
              <p className="text-body-medium text-dark-primary font-body">
                Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                bekerja sebagai Senior Talent Acquisition Specialist di Wings
                Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
            <div className="flex gap-2.5">
              <img src="/avatars/Avatar-08.png" alt="" />
              <div>
                <span className="text-dark-primary font-body font-medium">
                  Gregorius Edrik Lawanto
                </span>
                <p className="text-body-small text-dark-secondary font-body">
                  Alumni Batch 2
                </p>
              </div>
            </div>
            <div>
              <p className="text-body-medium text-dark-primary font-body">
                Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini
                bekerja sebagai Senior Talent Acquisition Specialist di Wings
                Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
              </p>
            </div>
          </div>
        </div>
      </article>
  )
}

export default DescProduct