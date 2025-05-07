import { Tooltip } from "primereact/tooltip";


export default function Support() {
          return (
                    <>
                              <div className="px-3 container mx-auto my-6">
                                        <div className="flex justify-start flex-col gap-3">
                                                  <span className="font-bold text-[1.4rem] sm:text-[1.8rem] hover:underline">Support Me:</span>
                                                  <ul className="flex items-center gap-4">
                                                            
                                                            {/* tampungan Tooltip tags*/}
                                                            <Tooltip target={".tooltip-facebook"} />
                                                            <Tooltip target={".tooltip-instagram"} />
                                                            <Tooltip target={".tooltip-github"} />
                                                            <Tooltip target={".tooltip-whatsapp"} />

                                                            <li className="item-facebook">
                                                                      <a href="" className="tooltip-facebook text-blue-500" data-pr-tooltip="Facebook" data-pr-position="right">
                                                                                <i className="pi pi-facebook !text-[1.3rem] sm:!text-[1.7rem]"></i>
                                                                      </a>
                                                            </li>
                                                            <li className="item-instagram">
                                                                      <a href="" className="tooltip-instagram text-orange-600" data-pr-tooltip="Instagram" data-pr-position="bottom">
                                                                                <i className="pi pi-instagram !text-[1.3rem] sm:!text-[1.7rem]"></i>
                                                                      </a>
                                                            </li>
                                                            <li className="item-github">
                                                                      <a href="" className="tooltip-github" data-pr-tooltip="Github" data-pr-position="left">
                                                                                <i className="pi pi-github !text-[1.3rem] sm:!text-[1.7rem]"></i>
                                                                      </a>
                                                            </li>
                                                            <li className="item-whatsapp">
                                                                      <a href="" className="tooltip-whatsapp text-green-600" data-pr-tooltip="Whatsapp" data-pr-position="top">
                                                                                <i className="pi pi-whatsapp !text-[1.3rem] sm:!text-[1.7rem]"></i>
                                                                      </a>
                                                            </li>
                                                  </ul>
                                        </div>
                              </div>
                    </>
          )
}