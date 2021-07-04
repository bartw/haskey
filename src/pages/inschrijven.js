import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFileAlt,
  faFilePdf,
} from "@fortawesome/free-regular-svg-icons";
import PageLayout from "../components/page-layout";

const Inschrijven = () => (
  <PageLayout title="Inschrijven">
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Starters</h2>

      <div className="md:grid md:grid-cols-2 md:gap-16">
        <div className="mt-6">
          <h3 className="font-semibold">Proberen</h3>
          <h4 className="text-xs text-royal-700">3 maal op zondag</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">Gratis</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Rookies</h3>
          <h4 className="text-xs text-royal-700">1 training per week</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ 275</div>
              </div>
            </div>
            <div className="ml-8 sm:ml-16 text-sm">
              <h4>Documenten:</h4>
              <ul>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Inschrijving.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Inschrijving</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Huishoudelijk reglement.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Huishoudelijk reglement
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="https://www.rbihf.be/"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Medisch attest RBIHF</span>
                  </a>
                </li>
                <li className="mt-2 flex items-baseline">
                  <FontAwesomeIcon icon={faFile} fixedWidth className="mr-2" />
                  <span>Kopie identiteitskaart (voor en achter)</span>
                </li>
                <li className="mt-2 flex items-baseline">
                  <FontAwesomeIcon icon={faFile} fixedWidth className="mr-2" />
                  <span>Pasfoto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-lg font-semibold">Competitie</h2>

      <div className="md:grid md:grid-cols-2 md:gap-16">
        <div className="mt-6">
          <h3 className="font-semibold">&gt; 2011</h3>
          <h4 className="text-xs text-royal-700">U8 & U10</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ 435</div>
              </div>
            </div>
            <div className="ml-8 sm:ml-16 text-sm">
              <h4>Documenten:</h4>
              <ul>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Inschrijving.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Inschrijving</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Huishoudelijk reglement.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Huishoudelijk reglement
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="https://www.rbihf.be/"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Medisch attest RBIHF</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">2011 - 2010</h3>
          <h4 className="text-xs text-royal-700">U12</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ 490</div>
              </div>
            </div>
            <div className="ml-8 sm:ml-16 text-sm">
              <h4>Documenten:</h4>
              <ul>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Inschrijving.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Inschrijving</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Huishoudelijk reglement.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Huishoudelijk reglement
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="https://www.rbihf.be/"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Medisch attest RBIHF</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">2009 - 2008</h3>
          <h4 className="text-xs text-royal-700">U14</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ 545</div>
              </div>
            </div>
            <div className="ml-8 sm:ml-16 text-sm">
              <h4>Documenten:</h4>
              <ul>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Inschrijving.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Inschrijving</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Huishoudelijk reglement.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Huishoudelijk reglement
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="https://www.rbihf.be/"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Medisch attest RBIHF</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">2007 - 2006</h3>
          <h4 className="text-xs text-royal-700">U16</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ 575</div>
              </div>
            </div>
            <div className="ml-8 sm:ml-16 text-sm">
              <h4>Documenten:</h4>
              <ul>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Inschrijving.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Inschrijving</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Huishoudelijk reglement.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Huishoudelijk reglement
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Antidopingverklaring.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Anti-doping verklaring
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="https://www.rbihf.be/"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Medisch attest RBIHF</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">2005 - 2003</h3>
          <h4 className="text-xs text-royal-700">U19</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ 635</div>
              </div>
            </div>
            <div className="ml-8 sm:ml-16 text-sm">
              <h4>Documenten:</h4>
              <ul>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Inschrijving.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Inschrijving</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Huishoudelijk reglement.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Huishoudelijk reglement
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Antidopingverklaring.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Anti-doping verklaring
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="https://www.rbihf.be/"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Medisch attest RBIHF</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Divisie 2</h3>
          <h4 className="text-xs text-royal-700">&nbsp;</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ 635</div>
              </div>
            </div>
            <div className="ml-8 sm:ml-16 text-sm">
              <h4>Documenten:</h4>
              <ul>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Inschrijving.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Inschrijving</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Huishoudelijk reglement.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Huishoudelijk reglement
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Antidopingverklaring.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Anti-doping verklaring
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="https://www.rbihf.be/"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Medisch attest RBIHF</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-lg font-semibold">Recreatief</h2>

      <div className="md:grid md:grid-cols-2 md:gap-16">
        <div className="mt-6">
          <h3 className="font-semibold">Dinoz</h3>
          <h4 className="text-xs text-royal-700">&nbsp;</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ 510</div>
              </div>
            </div>
            <div className="ml-8 sm:ml-16 text-sm">
              <h4>Documenten:</h4>
              <ul>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Inschrijving.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Inschrijving</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Huishoudelijk reglement.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">
                      Huishoudelijk reglement
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-baseline"
                    href="forms/Haskey_Medisch_Attest_DINOZ.pdf"
                  >
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      fixedWidth
                      className="mr-2"
                    />
                    <span className="text-royal-500">Medisch attest Dinoz</span>
                  </a>
                </li>
                <li className="mt-2 flex items-baseline">
                  <FontAwesomeIcon icon={faFile} fixedWidth className="mr-2" />
                  <span>Kopie identiteitskaart (voor en achter)</span>
                </li>
                <li className="mt-2 flex items-baseline">
                  <FontAwesomeIcon icon={faFile} fixedWidth className="mr-2" />
                  <span>Pasfoto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-lg font-semibold">Kortingen</h2>

      <div className="md:grid md:grid-cols-2 md:gap-16">
        <div className="mt-6">
          <h3 className="font-semibold">Goalies</h3>
          <h4 className="text-xs text-royal-700">&nbsp;</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ -150</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Vanaf 2de gezinslid</h3>
          <h4 className="text-xs text-royal-700">uitgezonderd rookies</h4>
          <div className="mt-4 flex">
            <div>
              <div className="w-32 border-2 border-royal-900 rounded shadow p-2">
                <div className="text-lg">€ -25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-lg font-semibold">Rekeningnummer</h2>

      <div className="mt-4">
        <h3 className="font-semibold">IBAN</h3>
        <div className="text-lg">BE12 7512 1124 2192</div>
      </div>
    </section>
  </PageLayout>
);

export default Inschrijven;
