"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "lucide-react";
import { useNotification } from "./notification";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  const { showNotification } = useNotification();

  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };

  return (
    <div className="navbar bg-gradient-to-r to-[#509f92] via-purple-500 from-purple-900 sticky top-0 z-40 h-10 ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex-1 px-2 lg:flex-none">
          <Link
            href="/"
            className="btn btn-ghost text-2xl gap-2 normal-case font-bold text-blue-400 bg-gradient-to-t from-blue-500 to-blue-800 text-transparent bg-clip-text"
            prefetch={true}
            onClick={() =>
              showNotification("Welcome to ImageKit ReelsPro", "info")
            }
          >
            {/* <Home className="w-5 h-5" /> */}
            {/* <Image
              src="./pngwing.com.png"
              alt="reelPro Logo"
              className="w-10 h-10"
            /> */}
            ImageKit ReelsPro
          </Link>
        </div>
        <div className="flex flex-1 justify-end px-2">
          <div className="flex items-stretch gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-gray-600"
              >
                <User className="w-5 h-5" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] shadow-lg bg-[#0f172b] rounded-box w-64 mt-4 py-2"
              >
                {session ? (
                  <>
                    <li className="px-4 py-1">
                      <span className="text-sm opacity-70 text-white font-bold">
                        {session.user?.email?.split("@")[0]}
                      </span>
                    </li>
                    <div className="divider my-1"></div>

                    <li>
                        <Link
                          href="/upload"
                          className="px-4 py-2  block w-full text-blue-600"
                          onClick={() =>
                            showNotification(
                              "Welcome to Admin Dashboard",
                              "info"
                            )
                          }
                        >
                          Video Upload
                        </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-error font-semibold w-full text-left"
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      href="/login"
                      className="px-4 py-2 hover:text-gray-300 block w-full"
                      onClick={() =>
                        showNotification("Please sign in to continue", "info")
                      }
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
